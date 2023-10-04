import _ from "lodash";
import Icon from "@components/base/Icon";
import DownloadCvWrapper from "@components/DownloadCvWrapper";
import { useStore } from "@nanostores/react";
import { storeMap } from "@utils/nanostore";

import myImage from "@assets/images/logo.png";

const Header = () => {
  const { darkMode } = useStore(storeMap);

  const toggleDarkTheme = () => {
    storeMap.set({
      ...storeMap,
      darkMode: !darkMode,
    });
  };

  return (
    <nav className="navigation">
      <img src={myImage} alt="logo" className="logo" />
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
        <DownloadCvWrapper>
          <Icon icon="download" width="w-5 md:w-6" />
        </DownloadCvWrapper>
        <Icon
          icon={darkMode ? "light_mode" : "dark_mode"}
          class="w-1"
          onClick={toggleDarkTheme}
        />
      </ul>
    </nav>
  );
};

export default Header;
