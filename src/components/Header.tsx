import Icon from "@components/base/Icon";
import { useStore } from "@nanostores/react";
import { storeMap } from "@utils/nanostore";
import { downloadPdf, toggleDarkTheme } from "@utils/common";
import logo from "@assets/images/logo.png";
import lightLogo from "@assets/images/light_logo.png";

const Header = () => {
  const { darkMode } = useStore(storeMap);

  return (
    <nav className="navigation">
      <img src={darkMode ? logo : lightLogo} alt="logo" className="logo" />
      <ul className="flex justify-center items-center gap-12 link">
        <a href="/#about">
          <li className="link">About</li>
        </a>
        <a href="/#projects">
          <li className="link">Projects</li>
        </a>
        <a href="/#contact">
          <li className="link">Contact</li>
        </a>
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
