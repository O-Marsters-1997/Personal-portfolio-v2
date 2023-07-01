import { IconDefinition, IconSvg } from "../../styles/theme/IconSvg";

interface Props {
  icon: IconDefinition;
  class?: string;
}

const Icon = ({ icon, class: className }: Props) => {
  return (
    <div className={`w-5 ${icon} ${className || ""}`}>{IconSvg[icon]}</div>
  );
};

export default Icon;
