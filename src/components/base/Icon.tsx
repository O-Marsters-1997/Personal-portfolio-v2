import { type IconDefinition, IconSvg } from "../../styles/theme/IconSvg";
import { useStore } from "@nanostores/react";
import { storeMap } from "@utils/nanostore";
import { accessibleOnClick } from "@utils/common";

interface Props {
  icon: IconDefinition;
  class?: string;
  width?: string;
  onClick?: () => void;
  projectName?: string;
  githubHref?: string;
}

const Icon = ({
  icon,
  width,
  projectName,
  class: className,
  onClick,
}: Props) => {
  const { darkMode } = useStore(storeMap);
  const isLinkIcon = icon === "external" || icon === "github";

  const getIcon = () => {
    if (isLinkIcon && projectName === "portfolio") {
      return darkMode ? (`light_${icon}` as IconDefinition) : icon;
    }
    if (icon.includes("light_") || isLinkIcon) {
      return icon;
    }
    return !darkMode ? (`light_${icon}` as IconDefinition) : icon;
  };

  return (
    <i
      className={`theme-icon ${width ?? "w-7"} ${icon} ${className ?? ""}`}
      {...accessibleOnClick(onClick)}
      aria-label={icon}
    >
      {IconSvg[getIcon()]}
    </i>
  );
};

export default Icon;
