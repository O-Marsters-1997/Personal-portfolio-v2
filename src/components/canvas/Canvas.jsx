import React, { useEffect } from "react";
import { colors } from "../../styles/theme/colors";

const Canvas = () => {
  useEffect(() => {
    renderCanvas();
  }, []);

  const myColors = {
    first: colors.secondary,
    second: colors.tertiary,
    third: colors.red[500],
    fourth: colors.green[500],
  };

  const renderCanvas = () => {
    const canvas = document.querySelector("canvas");
    const c = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const canvasColors = [
      myColors.first,
      myColors.second,
      myColors.third,
      myColors.fourth,
    ];

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      init();
    });

    // // Objects
    class Particle {
      constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
      }

      draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.shadowColor = this.color;
        c.shadowBlur = 15;
        c.fill();
        c.closePath();
      }

      update() {
        this.draw();
      }
    }

    // // Implementation
    let particles;
    function init() {
      particles = [];
      let numParticles;

      canvas.width > 450 ? (numParticles = 400) : (numParticles = 50);

      for (let i = 0; i < numParticles; i++) {
        const canvasWidth = canvas.width + canvas.width / 2;
        const canvasHeight = canvas.height + canvas.width / 2;
        const x = Math.random() * canvasWidth - canvasWidth / 2;
        const y = Math.random() * canvasHeight - canvasHeight / 2;
        const radius = 2 * Math.random();

        const color =
          canvasColors[Math.floor(Math.random() * canvasColors.length)];
        particles.push(new Particle(x, y, radius, color));
      }
    }

    // // Animation Loop
    let radians = 0;
    function animate() {
      requestAnimationFrame(animate);
      c.fillStyle = colors.base.main;
      c.fillRect(0, 0, canvas.width, canvas.height);
      c.fillText("HTML CANVAS BOILERPLATE", mouse.x, mouse.y);
      c.save();
      c.translate(canvas.width / 2, canvas.height / 2);
      c.rotate(radians);
      particles.forEach((particle) => {
        particle.update();
      });
      c.restore();

      radians += 0.002;
    }

    init();
    animate();
  };

  return <canvas id="hero-canvas"></canvas>;
};

export default Canvas;
