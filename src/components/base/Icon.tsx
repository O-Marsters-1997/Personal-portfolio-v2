import { IconDefinition, IconSvg } from "../../styles/theme/IconSvg";

type Props = {
  icon: IconDefinition;
  class?: string;
  width?: string;
};

const Icon = ({ icon, class: className, width }: Props) => {
  return (
    <div className={`${width ?? "w-7"} ${icon} ${className || ""}`}>
      {IconSvg[icon]}
    </div>
  );
};

export default Icon;
