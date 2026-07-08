import * as THREE from "three";

/**
 * Deep Field hero — a quiet Milky Way.
 *
 * Stars live in a tilted galactic disc: most in the thin plane (many bound
 * into open clusters that orbit rigidly together), a sparse dim halo above
 * and below for depth. The whole disc rotates slowly; inner field stars
 * orbit faster than outer ones (Kepler shear). The cursor has gravity —
 * nearby stars lean toward it with a hint of swirl — and clicking + dragging
 * grabs the whole galaxy and spins it with inertia.
 *
 * The palette is deliberately near-monochrome (cold whites) with rare gold
 * beacons, so the field reads as sky, not decoration, and the overlay copy
 * keeps its contrast.
 */

type PointerInput = {
  /** Normalised device coords, smoothed. -1..1 */
  x: number;
  y: number;
  /** Smoothed pointer velocity in NDC units/second */
  vx: number;
  vy: number;
  /** Smoothed speed magnitude 0..~1 */
  speed: number;
  /** True while a pointer is pressed on the hero */
  down: boolean;
  /** True once the user has moved a pointer at least once */
  active: boolean;
};

const STAR_PALETTE = [
  { color: "#ffffff", weight: 0.34 },
  { color: "#dfe8fa", weight: 0.31 }, // pale blue-white
  { color: "#b3c4e8", weight: 0.3 }, // cool blue
  { color: "#ffd9a0", weight: 0.05 }, // the rare warm one
];

const starVertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uSize;
  uniform float uMaxSize;
  attribute float aScale;
  attribute float aPhase;
  varying vec3 vColor;

  void main() {
    vec4 viewPosition = viewMatrix * modelMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * viewPosition;

    float twinkle = 0.92 + 0.08 * sin(uTime * 1.1 + aPhase);
    gl_PointSize = min(uSize * aScale * twinkle / -viewPosition.z, uMaxSize);

    vColor = color * twinkle;
  }
`;

const starFragmentShader = /* glsl */ `
  varying vec3 vColor;

  void main() {
    float d = distance(gl_PointCoord, vec2(0.5)) * 2.0;
    // Tight core, restrained halo: a point of light, not a bauble
    float core = smoothstep(0.28, 0.0, d);
    float halo = pow(clamp(1.0 - d, 0.0, 1.0), 3.2) * 0.5;
    float alpha = clamp(core + halo, 0.0, 1.0);
    if (alpha < 0.015) discard;
    vec3 col = mix(vColor, vec3(1.0), core * 0.5);
    gl_FragColor = vec4(col, alpha);
  }
`;

const pickColor = () => {
  let r = Math.random();
  for (const entry of STAR_PALETTE) {
    r -= entry.weight;
    if (r <= 0) return entry.color;
  }
  return STAR_PALETTE[0].color;
};

/** Rough gaussian, plenty for scatter. */
const gauss = () => Math.random() + Math.random() + Math.random() - 1.5;

/** Soft radial gradient texture, shared by the disc haze and the dust. */
const makeGlowTexture = (inner: string, mid: string) => {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  gradient.addColorStop(0, inner);
  gradient.addColorStop(0.4, mid);
  gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
};

let greeted = false;

export const mountHeroScene = (canvas: HTMLCanvasElement): (() => void) => {
  // client:only wraps the canvas in a display:contents astro-island, so the
  // parent reports 0×0. The canvas itself is absolutely positioned against
  // .hero and always measures correctly.
  const measure = () => ({
    width: canvas.clientWidth || window.innerWidth,
    height: canvas.clientHeight || window.innerHeight,
  });

  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
  } catch {
    return () => undefined; // No WebGL: the CSS backdrop carries the hero
  }

  if (!greeted) {
    greeted = true;
    console.info(
      "%c✦ Hello, stargazer. This galaxy is one THREE.Points draw call with hand-rolled cursor gravity — source at github.com/O-Marsters-1997.",
      "color:#e6b450"
    );
  }

  const initial = measure();
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    55,
    initial.width / initial.height,
    0.1,
    120
  );
  scene.add(camera);

  const dpr = Math.min(window.devicePixelRatio, 2);
  const setSize = () => {
    const { width, height } = measure();
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(dpr);
    renderer.setSize(width, height, false); // CSS owns the element size
  };
  setSize();

  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  /* ------------------------------------------------- star field */

  const count = isMobile ? 380 : 950;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const scales = new Float32Array(count);
  const phases = new Float32Array(count);

  // Orbit definition per star: orthonormal basis (u, v) spanning its plane
  const basisU = new Float32Array(count * 3);
  const basisV = new Float32Array(count * 3);
  const radii = new Float32Array(count);
  const speeds = new Float32Array(count);
  const angles = new Float32Array(count);
  // Smoothed cursor-gravity offset per star
  const offsets = new Float32Array(count * 3);

  {
    // Open clusters: dense knots that orbit rigidly together (bound systems)
    const clusters = Array.from({ length: 6 }, () => {
      const radius = 1.8 + Math.random() * 4.4;
      return {
        radius,
        angle: Math.random() * Math.PI * 2,
        spread: 0.3 + Math.random() * 0.45,
        speed: (0.32 / Math.sqrt(radius)) * (0.9 + Math.random() * 0.2),
      };
    });

    const axis = new THREE.Vector3();
    const ref = new THREE.Vector3();
    const u = new THREE.Vector3();
    const v = new THREE.Vector3();
    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const inCluster = Math.random() < 0.55;
      const inHalo = !inCluster && Math.random() < 0.16;

      let radius: number;
      if (inCluster) {
        const c = clusters[Math.floor(Math.random() * clusters.length)];
        radius = THREE.MathUtils.clamp(c.radius + gauss() * c.spread, 1.1, 7.4);
        angles[i] = c.angle + (gauss() * c.spread * 1.4) / radius;
        speeds[i] = c.speed; // rigid: the cluster travels as one
      } else {
        radius = 1.2 + Math.pow(Math.random(), 1.4) * 6.2;
        angles[i] = Math.random() * Math.PI * 2;
        speeds[i] = (0.32 / Math.sqrt(radius)) * (0.85 + Math.random() * 0.3);
      }
      radii[i] = radius;

      // Thin disc for the band; a wide-tilt sparse halo for 3D depth
      const tilt = inHalo ? 0.9 : 0.16;
      axis
        .set((Math.random() - 0.5) * tilt, 1, (Math.random() - 0.5) * tilt)
        .normalize();
      ref.set(0, 0, 1);
      if (Math.abs(axis.dot(ref)) > 0.9) ref.set(1, 0, 0);
      u.crossVectors(axis, ref).normalize();
      v.crossVectors(axis, u).normalize();
      basisU.set([u.x, u.y, u.z], i3);
      basisV.set([v.x, v.y, v.z], i3);

      // A handful of beacons among a field of fine points
      scales[i] =
        Math.random() < 0.04
          ? 1.6 + Math.random()
          : 0.35 + Math.pow(Math.random(), 2) * 0.9;
      if (inHalo) scales[i] *= 0.7;
      phases[i] = Math.random() * Math.PI * 2;

      color
        .set(pickColor())
        .multiplyScalar((inHalo ? 0.45 : 0.6) + Math.random() * 0.4);
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));
  geometry.setAttribute("aPhase", new THREE.BufferAttribute(phases, 1));

  const material = new THREE.ShaderMaterial({
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexColors: true,
    transparent: true,
    uniforms: {
      uTime: { value: 0 },
      uSize: { value: (isMobile ? 170 : 210) * dpr },
      uMaxSize: { value: 90 * dpr },
    },
    vertexShader: starVertexShader,
    fragmentShader: starFragmentShader,
  });

  const points = new THREE.Points(geometry, material);
  points.frustumCulled = false; // positions stream in every frame

  // Faint cool haze lying in the disc plane — the milky band itself
  const hazeTexture = makeGlowTexture(
    "rgba(205, 218, 244, 0.32)",
    "rgba(140, 160, 210, 0.09)"
  );
  const haze = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    new THREE.MeshBasicMaterial({
      map: hazeTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
      opacity: 0.55,
    })
  );
  haze.rotation.x = -Math.PI / 2;
  haze.scale.set(15, 9.5, 1);

  // Everything galactic rotates together as one group
  const galaxy = new THREE.Group();
  galaxy.add(points, haze);
  scene.add(galaxy);

  // Distant dust shell for depth parallax
  const dustCount = isMobile ? 220 : 500;
  const dustPositions = new Float32Array(dustCount * 3);
  for (let i = 0; i < dustCount; i++) {
    const r = 14 + Math.random() * 22;
    const theta = Math.random() * Math.PI * 2;
    const y = (Math.random() * 2 - 1) * 0.9;
    const s = Math.sqrt(1 - y * y);
    dustPositions.set(
      [Math.cos(theta) * s * r, y * r, Math.sin(theta) * s * r],
      i * 3
    );
  }
  const dustGeometry = new THREE.BufferGeometry();
  dustGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(dustPositions, 3)
  );
  const dustTexture = makeGlowTexture(
    "rgba(255, 255, 255, 0.9)",
    "rgba(150, 168, 215, 0.3)"
  );
  const dustMaterial = new THREE.PointsMaterial({
    size: 0.12,
    map: dustTexture,
    color: new THREE.Color("#7d8fb8"),
    transparent: true,
    opacity: 0.32,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
  });
  const dust = new THREE.Points(dustGeometry, dustMaterial);
  scene.add(dust);

  camera.position.set(0, 0.9, 8.6);
  camera.lookAt(0, 0, 0);

  /* ------------------------------------------------- interaction state */

  const input: PointerInput = {
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    speed: 0,
    down: false,
    active: false,
  };
  const target = { x: 0, y: 0 };
  let lastPointer = { x: 0, y: 0, t: performance.now() };

  const BASE_TILT = 0.42;
  const BASE_LEAN = -0.26; // diagonal band across the frame
  let rotX = BASE_TILT;
  let rotY = 0;
  let dragVelX = 0;
  let dragVelY = 0;

  const onPointerMove = (event: PointerEvent) => {
    const nx = (event.clientX / window.innerWidth) * 2 - 1;
    const ny = -((event.clientY / window.innerHeight) * 2 - 1);
    const now = performance.now();
    const dt = Math.max(16, now - lastPointer.t) / 1000;
    input.vx = (nx - lastPointer.x) / dt;
    input.vy = (ny - lastPointer.y) / dt;
    lastPointer = { x: nx, y: ny, t: now };
    target.x = nx;
    target.y = ny;
    input.active = true;
  };
  const onPointerDown = (event: PointerEvent) => {
    // Only grab the galaxy from within the hero, so text elsewhere on the
    // page stays selectable.
    if (!(event.target as Element | null)?.closest?.(".hero")) return;
    input.down = true;
    document.body.style.userSelect = "none";
  };
  const onPointerUp = () => {
    input.down = false;
    document.body.style.userSelect = "";
  };

  window.addEventListener("pointermove", onPointerMove, { passive: true });
  window.addEventListener("pointerdown", onPointerDown, { passive: true });
  window.addEventListener("pointerup", onPointerUp, { passive: true });
  window.addEventListener("pointercancel", onPointerUp, { passive: true });
  window.addEventListener("resize", setSize);

  /* ------------------------------------------------- per-frame update */

  const raycaster = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  const inverseQuat = new THREE.Quaternion();
  const rayOrigin = new THREE.Vector3();
  const rayDir = new THREE.Vector3();
  const PULL_RADIUS = 2.3;
  const PULL_STRENGTH = 0.55; // max fraction of the gap closed toward the ray
  const SWIRL = 0.55;

  const update = (elapsed: number, delta: number) => {
    material.uniforms.uTime.value = elapsed;

    // Grab-and-spin: while held, pointer velocity drives the whole galaxy;
    // on release the spin carries with inertia and slowly damps out.
    if (input.down) {
      const grab = 1 - Math.exp(-8 * delta);
      dragVelY += (input.vx * 0.55 - dragVelY) * grab;
      dragVelX += (-input.vy * 0.4 - dragVelX) * grab;
    } else {
      const damp = Math.exp(-0.9 * delta);
      dragVelX *= damp;
      dragVelY *= damp;
    }
    rotY += (0.03 + dragVelY) * delta;
    rotX = THREE.MathUtils.clamp(
      rotX + dragVelX * delta,
      BASE_TILT - 0.55,
      BASE_TILT + 0.55
    );
    galaxy.rotation.set(rotX, rotY, BASE_LEAN);
    dust.rotation.y = rotY * 0.3;
    dust.rotation.x = (rotX - BASE_TILT) * 0.3;

    // Camera parallax
    const ease = 1 - Math.exp(-3 * delta);
    camera.position.x += (input.x * 0.5 - camera.position.x) * ease;
    camera.position.y += (0.9 + input.y * 0.25 - camera.position.y) * ease;
    camera.lookAt(0, 0, 0);

    // Cursor gravity: transform the pointer ray into the galaxy's local
    // space once, then pull nearby stars toward it (with a touch of swirl)
    ndc.set(input.x, input.y);
    raycaster.setFromCamera(ndc, camera);
    inverseQuat.copy(galaxy.quaternion).invert();
    rayOrigin.copy(raycaster.ray.origin).applyQuaternion(inverseQuat);
    rayDir.copy(raycaster.ray.direction).applyQuaternion(inverseQuat);
    const rox = rayOrigin.x;
    const roy = rayOrigin.y;
    const roz = rayOrigin.z;
    const rdx = rayDir.x;
    const rdy = rayDir.y;
    const rdz = rayDir.z;
    const swirl = SWIRL * (0.5 + input.speed);

    const offsetEase = 1 - Math.exp(-3.5 * delta);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const angle = angles[i] + speeds[i] * elapsed;
      const c = Math.cos(angle) * radii[i];
      const s = Math.sin(angle) * radii[i];
      const px = basisU[i3] * c + basisV[i3] * s;
      const py = basisU[i3 + 1] * c + basisV[i3 + 1] * s;
      const pz = basisU[i3 + 2] * c + basisV[i3 + 2] * s;

      // Closest point on the ray, then lean the star toward it
      const t = (px - rox) * rdx + (py - roy) * rdy + (pz - roz) * rdz;
      let tx = 0;
      let ty = 0;
      let tz = 0;
      if (t > 0) {
        const dx = rox + rdx * t - px; // toward the ray
        const dy = roy + rdy * t - py;
        const dz = roz + rdz * t - pz;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < PULL_RADIUS && dist > 0.0001) {
          const f = (1 - dist / PULL_RADIUS) ** 2 * PULL_STRENGTH;
          // Tangential component: stars curl around the cursor, not just at it
          const cx = (rdy * dz - rdz * dy) / dist;
          const cy = (rdz * dx - rdx * dz) / dist;
          const cz = (rdx * dy - rdy * dx) / dist;
          tx = dx * f + cx * dist * f * swirl;
          ty = dy * f + cy * dist * f * swirl;
          tz = dz * f + cz * dist * f * swirl;
        }
      }
      offsets[i3] += (tx - offsets[i3]) * offsetEase;
      offsets[i3 + 1] += (ty - offsets[i3 + 1]) * offsetEase;
      offsets[i3 + 2] += (tz - offsets[i3 + 2]) * offsetEase;

      positions[i3] = px + offsets[i3];
      positions[i3 + 1] = py + offsets[i3 + 1];
      positions[i3 + 2] = pz + offsets[i3 + 2];
    }
    geometry.attributes.position.needsUpdate = true;
  };

  /* ------------------------------------------------- render loop */

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const clock = new THREE.Clock();
  let elapsed = 0;
  let frame = 0;
  let running = true;

  const renderFrame = () => {
    const delta = Math.min(clock.getDelta(), 0.05);
    elapsed += delta;

    if (!input.active) {
      // Autopilot for touch/idle: a slow figure-of-eight keeps the sky alive
      target.x = Math.sin(elapsed * 0.25) * 0.45;
      target.y = Math.sin(elapsed * 0.17) * 0.35;
    }
    const ease = 1 - Math.exp(-6 * delta);
    input.x += (target.x - input.x) * ease;
    input.y += (target.y - input.y) * ease;

    const rawSpeed = Math.hypot(input.vx, input.vy) * 0.25;
    input.speed += (Math.min(1, rawSpeed) - input.speed) * (1 - Math.exp(-3 * delta));
    input.vx *= Math.exp(-2 * delta);
    input.vy *= Math.exp(-2 * delta);

    update(elapsed, delta);
    renderer.render(scene, camera);
  };

  const loop = () => {
    if (!running) return;
    renderFrame();
    frame = requestAnimationFrame(loop);
  };

  const renderStatic = () => {
    // One composed frame, no motion: honest reduced-motion fallback
    input.x = 0.2;
    input.y = 0.1;
    update(0.5, 1 / 60);
    renderer.render(scene, camera);
  };

  const start = () => {
    if (reducedMotion.matches) {
      renderStatic();
      return;
    }
    running = true;
    clock.getDelta();
    frame = requestAnimationFrame(loop);
  };
  const stop = () => {
    running = false;
    cancelAnimationFrame(frame);
  };

  const onVisibility = () => {
    stop();
    if (!document.hidden) start();
  };
  document.addEventListener("visibilitychange", onVisibility);

  const onMotionPreference = () => {
    stop();
    start();
  };
  reducedMotion.addEventListener("change", onMotionPreference);

  const onResizeStatic = () => {
    if (reducedMotion.matches) renderStatic();
  };
  window.addEventListener("resize", onResizeStatic);

  start();

  return () => {
    stop();
    document.body.style.userSelect = "";
    document.removeEventListener("visibilitychange", onVisibility);
    reducedMotion.removeEventListener("change", onMotionPreference);
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerdown", onPointerDown);
    window.removeEventListener("pointerup", onPointerUp);
    window.removeEventListener("pointercancel", onPointerUp);
    window.removeEventListener("resize", setSize);
    window.removeEventListener("resize", onResizeStatic);
    geometry.dispose();
    material.dispose();
    haze.geometry.dispose();
    haze.material.dispose();
    hazeTexture.dispose();
    dustGeometry.dispose();
    dustMaterial.dispose();
    dustTexture.dispose();
    scene.remove(galaxy, dust);
    renderer.dispose();
  };
};
