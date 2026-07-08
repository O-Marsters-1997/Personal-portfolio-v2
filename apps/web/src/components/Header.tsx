import clsx from "clsx";
import Icon from "@components/base/Icon";
import Link from "@components/base/Link";
import { useDarkMode } from "@utils/useDarkMode";
import { downloadPdf, toggleDarkTheme } from "@utils/common";
import logo from "@assets/images/logo.png";
import lightLogo from "@assets/images/light_logo.png";

interface Props {
  className?: string;
}

const Header = ({ className }: Props) => {
  const darkMode = useDarkMode();

  return (
    <nav className={clsx("navigation", className && className)}>
      <img
        src={darkMode ? logo.src : lightLogo.src}
        alt="logo"
        className="logo animate-appear"
      />
      <ul className="flex justify-center items-center gap-12 link animate-appear">
        <li>
          <Link to="about">
            <span className="link">About</span>
          </Link>
        </li>
        <li>
          <Link to="projects">
            <span className="link">Projects</span>
          </Link>
        </li>
        <li>
          <Link to="contact">
            <span className="link">Contact</span>
          </Link>
        </li>
        <li className="w-5 md:w-6">
          <Icon icon="download" width="w-full" onClick={downloadPdf} />
        </li>
        <li className="w-5 md:w-6 theme-toggle">
          <Icon
            icon={darkMode ? "light_mode" : "light_dark_mode"}
            onClick={toggleDarkTheme}
            width="w-full"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
