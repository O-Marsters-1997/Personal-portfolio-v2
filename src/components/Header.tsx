import clsx from "clsx";
import Icon from "@components/base/Icon";
import { useStore } from "@nanostores/react";
import { storeMap } from "@utils/nanostore";
import { downloadPdf, toggleDarkTheme } from "@utils/common";
import logo from "@assets/images/logo.png";
import lightLogo from "@assets/images/light_logo.png";

type Props = {
  className?: string;
};

const Header = ({ className }: Props) => {
  const { darkMode } = useStore(storeMap);

  return (
    <nav className={clsx("navigation", className && className)}>
      <img
        src={darkMode ? logo.src : lightLogo.src}
        alt="logo"
        className="logo"
      />
      <ul className="flex justify-center items-center gap-12 link">
        <li>
          <a href="/#about">
            <span className="link">About</span>
          </a>
        </li>
        <li>
          <a href="/#projects">
            <span className="link">Projects</span>
          </a>
        </li>
        <li>
          <a href="/#contact">
            <span className="link">Contact</span>
          </a>
        </li>
        <Icon icon="download" width="w-5 md:w-6" onClick={downloadPdf} />
        <Icon
          icon={darkMode ? "light_mode" : "light_dark_mode"}
          onClick={toggleDarkTheme}
        />
      </ul>
    </nav>
  );
};

export default Header;
