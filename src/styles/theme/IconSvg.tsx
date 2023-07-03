//
// WARNING
//
// Do not make manual changes to this file.
//

/**
 * A list of all available icons in the icon set.
 */
export type IconDefinition = "download" | "light_mode";

export const availableIcons: IconDefinition[] = ["download", "light_mode"];

export const IconSvg = {
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
};
