import { IconDefinition, IconSvg } from "../../styles/theme/IconSvg";

type Props = {
  icon: IconDefinition;
  class?: string;
  width?: string;
  onClick?: () => void;
};

const Icon = ({ icon, class: className, width, onClick }: Props) => {
  return (
    <div
      className={`${width ?? "w-7"} ${icon} ${className || ""}`}
      onClick={onClick}
    >
      {IconSvg[icon]}
    </div>
  );
};

export default Icon;
