import { type IconDefinition, IconSvg } from "../../styles/theme/IconSvg";
import { useStore } from "@nanostores/react";
import { storeMap } from "@utils/nanostore";
import { accessibleOnClick } from "@utils/common";

interface Props {
  icon: IconDefinition;
  class?: string;
  width?: string;
  onClick?: () => void;
}

const Icon = ({ icon, class: className, width, onClick }: Props) => {
  const { darkMode } = useStore(storeMap);
  // TODO: add all icons
  const iconName: any = !darkMode ? `light_${icon}` : icon;
  return (
    <div
      className={`theme-icon ${width ?? "w-7"} ${icon} ${className ?? ""}`}
      {...accessibleOnClick(onClick)}
    >
      {IconSvg[icon]}
    </div>
  );
};

export default Icon;
