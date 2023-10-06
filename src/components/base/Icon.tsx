import { type IconDefinition, IconSvg } from "../../styles/theme/IconSvg";
import { accessibleOnClick } from "@utils/common";

interface Props {
  icon: IconDefinition;
  class?: string;
  width?: string;
  onClick?: () => void;
}

const Icon = ({ icon, class: className, width, onClick }: Props) => {
  return (
    <div
      className={`${width ?? "w-7"} ${icon} ${className ?? ""}`}
      {...accessibleOnClick(onClick)}
    >
      {IconSvg[icon]}
    </div>
  );
};

export default Icon;
