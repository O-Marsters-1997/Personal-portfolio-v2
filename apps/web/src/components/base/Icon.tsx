import { type IconDefinition, IconSvg } from "../../styles/theme/IconSvg";
import { useDarkMode } from "@utils/useDarkMode";
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
  const darkMode = useDarkMode();
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
