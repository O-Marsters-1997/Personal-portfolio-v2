//
// WARNING
//
// Do not make manual changes to this file.
//

/**
 * A list of all available icons in the icon set.
 */
export type IconDefinition =
  | "astro"
  | "copyright"
  | "download"
  | "external"
  | "github"
  | "light_mode"
  | "linux"
  | "nextjs"
  | "react"
  | "sanity"
  | "sass"
  | "supabase"
  | "tailwind"
  | "trpc"
  | "typescript"
  | "wave";

export const availableIcons: IconDefinition[] = [
  "astro",
  "copyright",
  "download",
  "external",
  "github",
  "light_mode",
  "linux",
  "nextjs",
  "react",
  "sanity",
  "sass",
  "supabase",
  "tailwind",
  "trpc",
  "typescript",
  "wave",
];

export const IconSvg = {
  astro: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 22">
      <g clipPath="url(#a)">
        <path
          fill="#C6C6C6"
          d="M12.799.55c.21.222.317.523.53 1.123L18 14.791a21.776 21.776 0 0 0-5.584-1.616L9.374 4.388a.344.344 0 0 0-.143-.175.442.442 0 0 0-.237-.067.442.442 0 0 0-.237.068.343.343 0 0 0-.142.175L5.61 13.171A21.779 21.779 0 0 0 0 14.789L4.695 1.67c.214-.6.321-.9.531-1.121.185-.196.426-.349.7-.443C6.235 0 6.601 0 7.335 0h3.352c.734 0 1.101 0 1.411.107.274.094.515.246.7.443Z"
        />
        <path
          fill="#D8B389"
          d="M13.358 15.416c-.77.563-2.307.946-4.078.946-2.173 0-3.994-.578-4.477-1.356-.173.446-.212.956-.212 1.282 0 0-.114 1.6 1.188 2.713 0-.578.548-1.046 1.224-1.046 1.16 0 1.158.864 1.157 1.565v.063c0 1.064.76 1.977 1.843 2.361a1.892 1.892 0 0 1-.253-.94c0-1.016.697-1.393 1.508-1.833.644-.35 1.36-.737 1.854-1.516.266-.42.404-.89.403-1.367 0-.304-.055-.597-.157-.872Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h18v22H0z" />
        </clipPath>
      </defs>
    </svg>
  ),
  copyright: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
      <path
        fill="#E2E8F0"
        d="M9 2.813A6.188 6.188 0 1 0 15.188 9 6.194 6.194 0 0 0 9 2.812Zm0 8.937a2.733 2.733 0 0 0 2.2-1.1.687.687 0 1 1 1.1.826 4.125 4.125 0 1 1 0-4.953.687.687 0 1 1-1.1.826A2.75 2.75 0 1 0 9 11.75ZM9 .062A8.937 8.937 0 1 0 17.938 9 8.947 8.947 0 0 0 9 .062Zm0 16.5A7.562 7.562 0 1 1 16.563 9 7.572 7.572 0 0 1 9 16.563Z"
      />
    </svg>
  ),
  download: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30">
      <path
        fill="#C6C6C6"
        d="M5.938 21.563a.938.938 0 0 1 .937.937v2.813c0 .172.14.312.313.312h15.625a.313.313 0 0 0 .312-.313V22.5a.938.938 0 0 1 1.875 0v2.813a2.188 2.188 0 0 1-2.188 2.187H7.188A2.188 2.188 0 0 1 5 25.312V22.5a.937.937 0 0 1 .938-.938Z"
      />
      <path
        fill="#C6C6C6"
        d="M6.525 12.463a.935.935 0 0 1 1.325 0l6.212 6.21V3.439a.938.938 0 0 1 1.875 0v15.236l6.213-6.211a.937.937 0 0 1 1.325 1.325L15.662 21.6a.935.935 0 0 1-1.325 0l-7.812-7.813a.936.936 0 0 1 0-1.325Z"
      />
    </svg>
  ),
  external: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        fill="#E2E8F0"
        d="M3.25.75a2.519 2.519 0 0 0-2.5 2.5v17.5c0 1.366 1.134 2.5 2.5 2.5h17.5c1.366 0 2.5-1.134 2.5-2.5V12h-2.5v8.75H3.25V3.25H12V.75H3.25Zm11.25 0v2.5h4.482L7.366 14.866l1.768 1.768L20.75 5.018V9.5h2.5V.75H14.5Z"
      />
    </svg>
  ),
  github: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25">
      <path
        fill="#E2E8F0"
        d="M11.074.087C5.324.712.7 5.337.074 10.96c-.625 5.876 2.75 11.126 7.875 13.126.375.125.75-.125.75-.625v-2s-.5.125-1.125.125c-1.75 0-2.5-1.5-2.625-2.375-.125-.5-.375-.875-.75-1.25-.375-.125-.5-.125-.5-.25 0-.25.375-.25.5-.25.75 0 1.375.875 1.625 1.25.625 1 1.375 1.25 1.75 1.25.5 0 .875-.125 1.125-.25.125-.875.5-1.75 1.25-2.25-2.875-.625-5-2.25-5-5 0-1.376.625-2.75 1.5-3.75-.125-.25-.25-.875-.25-1.75 0-.5 0-1.25.375-2 0 0 1.75 0 3.5 1.625.625-.25 1.5-.375 2.375-.375s1.75.125 2.5.375c1.625-1.625 3.5-1.625 3.5-1.625.25.75.25 1.5.25 2 0 1-.125 1.5-.25 1.75.875 1 1.5 2.25 1.5 3.75 0 2.75-2.125 4.375-5 5 .75.625 1.25 1.75 1.25 2.875v3.25c0 .375.375.75.875.625 4.625-1.875 7.875-6.375 7.875-11.626 0-7.5-6.375-13.374-13.875-12.5Z"
      />
    </svg>
  ),
  light_mode: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30">
      <path
        stroke="#F5F5F5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity=".83"
        strokeWidth="2"
        d="M15 5.625V2.812M8.37 8.372 6.384 6.382M5.625 15H2.812M15 27.188v-2.813m8.617-.758L21.63 21.63M27.187 15h-2.812M8.371 21.63l-1.989 1.988M23.619 6.383 21.63 8.37M20.625 15a5.625 5.625 0 1 1-11.25 0 5.625 5.625 0 0 1 11.25 0Z"
      />
    </svg>
  ),
  linux: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
      <path
        fill="#C6C6C6"
        fillRule="evenodd"
        d="M17.785 16.343c-.28-.23-.567-.456-.829-.707-.292-.279-.476-.616-.436-1.043.023-.246-.034-.458-.33-.54.07-.18.135-.301.162-.43.029-.144.027-.295.031-.443.042-1.556-.52-2.92-1.353-4.193a47.82 47.82 0 0 0-1.193-1.729c-.64-.889-.868-1.887-.88-2.966a7.439 7.439 0 0 0-.169-1.48c-.205-.944-.71-1.682-1.628-2.078A3.263 3.263 0 0 0 8.988.565C7.91.847 7.258 1.648 7.27 2.766c.012 1.076.065 2.153.144 3.227.045.608-.049 1.133-.452 1.615-.388.464-.735.965-1.072 1.468a4.452 4.452 0 0 0-.48.927c-.324.885-.621 1.777-1.137 2.578-.192.297-.213.63-.078.969.036.088.057.223.014.294-.367.61-.783 1.148-1.572 1.265-.622.092-.652.205-.633.846.015.521.01 1.047-.044 1.565-.057.556.001.707.538.84 1.238.307 2.486.57 3.67 1.07.504.214 1.01.14 1.416-.275.424-.433.96-.602 1.539-.603.982 0 1.964.047 2.947.058.265.003.418.102.525.344.131.295.353.513.695.55.655.073 1.252-.024 1.748-.524a6.507 6.507 0 0 1 2.127-1.442c.232-.097.45-.249.642-.414.348-.3.33-.491-.022-.781ZM9.755 3.769c.118-.407.396-.67.819-.75.356-.068.657.107.881.507.242.43.32.881.115 1.353-.17.386-.249.423-.645.292-.074-.025-.146-.054-.277-.102.11-.093.18-.162.26-.216.177-.12.227-.29.21-.492-.022-.265-.23-.5-.443-.496-.192.002-.354.182-.375.455-.014.17.015.344.027.561-.539-.16-.736-.55-.572-1.112Zm-1.993-.352c.2-.301.5-.361.797-.16.318.215.555.821.432 1.184-.044.132-.176.234-.268.35l-.094-.058c-.036-.196-.043-.404-.119-.584-.047-.114-.196-.185-.3-.275-.097.115-.264.225-.274.348-.014.17.075.356.151.52.049.104.157.18.268.3l-.3.236c-.472-.422-.612-1.378-.293-1.86Zm5.886 10.032c-.032.407-.079.424-.488.484-.29.043-.368.118-.383.463-.016.404-.017.808-.002 1.212a.881.881 0 0 1-.274.686c-1.057 1.072-2.32 1.58-3.83 1.395-.652-.08-1.078-.476-1.422-1.037.154-.057.267-.095.377-.14.488-.198.58-.618.19-.98-.294-.275-.623-.514-.939-.765-.305-.243-.614-.481-.92-.723-.26-.207-.36-.474-.367-.811a5.2 5.2 0 0 1 .49-2.304c.303-.658.537-1.347.82-2.014.145-.344.297-.696.512-.998.206-.29.333-.573.31-.928-.013-.2-.002-.4-.002-.6l.11-.055c.178.154.36.304.535.462.632.57 1.233.596 1.925.105.295-.21.614-.386.926-.571.078-.046.17-.066.302-.115l.996 2.343c.168.395.302.808.51 1.18.418.746.64 1.533.636 2.386-.002.442.021.886-.012 1.325Z"
        clipRule="evenodd"
      />
    </svg>
  ),
  nextjs: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
      <g clipPath="url(#a)">
        <path fill="#C6C6C6" d="M0 0h18v18H0z" />
        <path
          fill="#000"
          fillRule="evenodd"
          d="M0 9a9 9 0 1 1 14.037 7.46L5.889 5.051A.6.6 0 0 0 4.8 5.4v9H6V7.272l6.996 9.794A9 9 0 0 1 0 9Zm12 3V4.8h1.2V12H12Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h18v18H0z" />
        </clipPath>
      </defs>
    </svg>
  ),
  react: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        fill="#C6C6C6"
        d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85-1.03 0-1.87-.85-1.87-1.85 0-1.05.84-1.89 1.87-1.89ZM7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.697 22.697 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96Zm.71-5.74-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51Zm6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47ZM12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72Zm0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72ZM16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96Zm-.7 5.74.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51Zm1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95ZM17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26ZM6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26Zm9 2.26-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51Zm-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9ZM8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51Zm2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9Z"
      />
    </svg>
  ),
  sanity: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
      <g clipPath="url(#a)">
        <path
          fill="#C6C6C6"
          d="M0 0v18h18V0H0ZM8.96 3.2c2.578 0 4.07 1.338 4.438 3.22h-2.338c-.258-.742-.904-1.32-2.08-1.32-1.258 0-2.116.72-2.165 1.857h-.002c.437.275.986.493 1.65.659l2.063.47c1.842.415 2.964 1.448 2.964 3.13a3.159 3.159 0 0 1-.687 2.026c0-.059-.003-.114-.005-.17.002.055.003.11.003.168-.728.916-2.007 1.43-3.51 1.43-2.531 0-4.303-1.223-4.696-3.35h2.43c.313.976 1.142 1.429 2.247 1.429 1.347 0 2.243-.705 2.265-1.94-.45-.284-1.026-.513-1.749-.697l-2.025-.453C6.141 9.296 4.89 8.447 4.89 6.62a3.144 3.144 0 0 1 .655-1.957C6.247 3.755 7.47 3.2 8.96 3.2Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h18v18H0z" />
        </clipPath>
      </defs>
    </svg>
  ),
  sass: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
      <g clipPath="url(#a)">
        <mask
          id="b"
          width="21"
          height="20"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "luminance" }}
        >
          <path fill="#fff" d="M0 0h20v20H0V0Z" />
        </mask>
        <g mask="url(#b)">
          <path
            fill="#C6C6C6"
            d="M10 0c5.5 0 10 4.5 10 10s-4.5 10-10 10S0 15.5 0 10 4.5 0 10 0ZM8 13.313c.125.562.125 1.062 0 1.5L7.938 15c0 .063-.063.125-.063.125-.125.25-.25.438-.437.688-.563.624-1.375.874-1.75.687-.375-.188-.188-1.125.5-1.813.75-.75 1.75-1.25 1.75-1.25L8 13.313Zm8.25-9.063c-.437-1.75-3.374-2.375-6.187-1.375-1.625.625-3.438 1.563-4.75 2.75-1.563 1.438-1.75 2.688-1.688 3.188C4 10.624 6.5 11.874 7.563 12.75 7.25 12.875 5 14 4.5 15.188c-.562 1.25.063 2.124.5 2.187 1.313.375 2.688-.313 3.375-1.375.688-1.063.625-2.375.313-3.063a2.944 2.944 0 0 1 1.5-.062c1.75.188 2.125 1.313 2 1.75-.125.438-.438.688-.563.813-.124.062-.187.124-.124.124 0 .063.062.063.187.063s.938-.375.938-1.25c.062-1.063-1-2.25-2.813-2.25-.75 0-1.25.063-1.563.188 0-.063-.062-.063-.062-.063C7.063 11.062 5 10.187 5.063 8.562c0-.562.25-2.124 4-4 3.063-1.562 5.563-1.125 6-.187.625 1.313-1.313 3.813-4.5 4.188-1.25.124-1.875-.313-2-.5-.188-.188-.188-.188-.25-.188-.125.063-.063.188 0 .313.125.25.5.687 1.187.937.563.188 2 .313 3.75-.375 1.938-.75 3.438-2.813 3-4.563v.063Z"
          />
        </g>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  ),
  supabase: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
      <g clipPath="url(#a)">
        <path
          fill="#C6C6C6"
          d="M13.782 0H4.219A4.219 4.219 0 0 0 0 4.219v9.562A4.219 4.219 0 0 0 4.22 18h9.562A4.219 4.219 0 0 0 18 13.781V4.22A4.219 4.219 0 0 0 13.782 0Z"
        />
        <mask
          id="b"
          width="14"
          height="16"
          x="2"
          y="1"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "luminance" }}
        >
          <path fill="#fff" d="M2.25 1.969h13.565V16.03H2.25V1.97Z" />
        </mask>
        <g mask="url(#b)">
          <path
            fill="url(#c)"
            d="M10.179 15.693a.61.61 0 0 1-1.086-.37l-.125-8.369h5.627c1.02 0 1.588 1.178.954 1.976l-5.37 6.763Z"
          />
          <path
            fill="url(#d)"
            fillOpacity=".2"
            d="M10.179 15.693a.61.61 0 0 1-1.086-.37l-.125-8.369h5.627c1.02 0 1.588 1.178.954 1.976l-5.37 6.763Z"
          />
          <path
            fill="#10172A"
            d="M7.89 2.227a.609.609 0 0 1 1.086.37l.055 8.368H3.474c-1.02 0-1.588-1.177-.954-1.975l5.37-6.763Z"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="c"
          x1="8.968"
          x2="13.969"
          y1="8.81"
          y2="10.908"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".422" stop-color="#10172A" />
          <stop offset="1" stop-color="#435074" />
        </linearGradient>
        <linearGradient
          id="d"
          x1="6.75"
          x2="9.031"
          y1="5.774"
          y2="10.068"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h18v18H0z" />
        </clipPath>
      </defs>
    </svg>
  ),
  tailwind: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 16">
      <path
        fill="#C6C6C6"
        d="M13 0C9.53 0 7.372 1.729 6.5 5.2c1.3-1.729 2.821-2.379 4.55-1.95.989.247 1.704.962 2.483 1.755C14.808 6.305 16.25 7.8 19.5 7.8c3.471 0 5.63-1.729 6.5-5.2-1.3 1.729-2.82 2.379-4.55 1.95-.988-.247-1.69-.962-2.482-1.755C17.694 1.495 16.25 0 13 0ZM6.5 7.8C3.03 7.8.871 9.529 0 13c1.3-1.729 2.821-2.379 4.55-1.95.988.247 1.69.962 2.483 1.755 1.274 1.3 2.717 2.795 5.968 2.795 3.47 0 5.629-1.729 6.5-5.2-1.3 1.729-2.822 2.379-4.55 1.95-.989-.247-1.69-.962-2.484-1.755C11.194 9.295 9.75 7.8 6.5 7.8Z"
      />
    </svg>
  ),
  trpc: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
      <g clipPath="url(#a)">
        <path
          fill="#C6C6C6"
          d="M0 5.938A5.935 5.935 0 0 1 5.938 0h8.125A5.935 5.935 0 0 1 20 5.938v8.125A5.935 5.935 0 0 1 14.063 20H5.938A5.935 5.935 0 0 1 0 14.062V5.938ZM7.204 4.53v.922L3.922 7.36v3.329l-.875.5v3.203L5.83 16l1.203-.703 2.984 1.719 3-1.735 1.235.719 2.765-1.594v-3.219l-.906-.515V7.359l-3.36-1.953v-.875l-2.765-1.61-2.781 1.61Zm8.187 3.25v2.485l-1.156-.672-2.781 1.61v3.202l.828.469L10 16.188 7.75 14.89l.843-.485v-3.203l-2.781-1.61-1.188.688v-2.5l2.563-1.484h.016V7.75l2.765 1.594 2.782-1.594v-1.5l2.64 1.531ZM12.188 14v-1.953l1.688.969v1.953L12.188 14Zm4.11 0-1.704.984v-1.953l1.703-.984V14ZM3.765 14v-1.953l1.703.969v1.968L3.766 14Zm4.094 0-1.688.969v-1.953l1.688-.985V14Zm4.672-2.563 1.703-.984 1.687.985-1.687.968-1.703-.969Zm-5.032 0-1.703.985-1.687-.985 1.687-.984 1.703.985Zm.422-4.078V5.406l1.688.969v1.969l-1.688-.985Zm4.094 0-1.687.97V6.374l1.687-.984v1.968ZM8.282 4.781l1.687-.968 1.688.968-1.688.985-1.687-.985Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  ),
  typescript: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
      <g clipPath="url(#a)">
        <path
          fill="#C6C6C6"
          fillRule="evenodd"
          d="M0 0h18v18H0V0Zm12 7.2a2.4 2.4 0 0 0 0 4.8h1.2a1.2 1.2 0 1 1 0 2.4H12a1.2 1.2 0 0 1-1.2-1.2H9.6a2.4 2.4 0 0 0 2.4 2.4h1.2a2.4 2.4 0 0 0 0-4.8H12a1.2 1.2 0 1 1 0-2.4h1.4a1 1 0 0 1 1 1v.2h1.2v-.2a2.2 2.2 0 0 0-2.2-2.2H12Zm-8.4 0h6v1.2H7.2v7.2H6V8.4H3.6V7.2Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h18v18H0z" />
        </clipPath>
      </defs>
    </svg>
  ),
  wave: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        fill="#D8B389"
        d="M3.102 3.035a1.125 1.125 0 0 1 1.365.817l1.446 5.789a.876.876 0 1 0 1.7-.425L6.035 2.898a1.125 1.125 0 1 1 2.182-.546l1.698 6.8a.878.878 0 1 0 1.704-.422l-1.077-4.365a1.126 1.126 0 1 1 2.184-.546l1.193 4.835a.886.886 0 1 0 1.716-.447L15 5.887a1.126 1.126 0 0 1 2.18-.562l1.119 4.131.003.01c.015.043.03.085.039.13.217 1.056.382 2.152.41 3.135.049 1.834-.235 4.213-.466 5.806a3.64 3.64 0 0 1-2.589 2.958l-2.676.792c-2.145.635-4.396-.174-5.853-1.756-1.26-1.373-2.902-2.895-4.486-3.647a2.103 2.103 0 0 1-1.071-1.137 1.514 1.514 0 0 1 .376-1.665 3.564 3.564 0 0 1 1.757-.936c.228-.045.465-.067.712-.063l-2.17-8.685a1.125 1.125 0 0 1 .817-1.363Zm17.043-1.527a.75.75 0 0 1 .557.142 7.785 7.785 0 0 1 2.52 8.31.735.735 0 0 1-.722.54l-.21-.03a.75.75 0 0 1-.51-.93 6.285 6.285 0 0 0-1.98-6.69.75.75 0 0 1 .345-1.342Zm-.96 2.377a.735.735 0 0 0-1.035.18.736.736 0 0 0 .15 1.035 3.555 3.555 0 0 1 1.2 3.09.75.75 0 0 0 .69.81.75.75 0 0 0 .75-.69 5.058 5.058 0 0 0-1.755-4.425Z"
      />
    </svg>
  ),
};
