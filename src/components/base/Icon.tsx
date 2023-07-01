import { IconDefinition, IconSvg } from "../../styles/theme/IconSvg";

interface Props {
  icon: IconDefinition;
  class?: string;
  width?: string;
}

const Icon = ({ icon, class: className, width }: Props) => {
  return (
    <div className={`${width ?? "w-5"} ${icon} ${className || ""}`}>
      {IconSvg[icon]}
    </div>
  );
};

export default Icon;
