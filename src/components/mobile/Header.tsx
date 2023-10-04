import { useState } from "react";
import clsx from "clsx";
import Icon from "@components/base/Icon";
import DownloadCvWrapper from "@components/DownloadCvWrapper";
import { useStore } from "@nanostores/react";
import { storeMap } from "@utils/nanostore";
import { toggleDarkTheme } from "@utils/common";
import myImage from "@assets/images/logo.png";

type Navlink = "about" | "projects" | "writing" | "contact";

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState<null | Navlink>(null);
  const { darkMode } = useStore(storeMap);
  const navlinks: Navlink[] = ["about", "projects", "contact"];

  const handleOpenMobileNavigation = () => {
    setMobileNavOpen(!mobileNavOpen);
    storeMap.set({
      ...storeMap,
      darkMode: storeMap.get().darkMode,
      mobileNavigationOpen: !storeMap.get().mobileNavigationOpen,
    });
  };

  return (
    <>
      {mobileNavOpen && (
        <div className="dark:bg-dark-primary-dark bg-light-primary-dark h-[100vh] flex flex-col justify-center w-4/5 fixed right-0 z-20">
          <ul className="flex flex-col items-start justify-between ml-14 h-80 last:mt-4">
            {navlinks.map((navlink, index) => {
              const capitalised =
                navlink.charAt(0).toUpperCase() + navlink.slice(1);

              const handleNavigation = () => {
                setSelectedLink(navlink);
                setMobileNavOpen(false);
                storeMap.set({
                  ...storeMap,
                  mobileNavigationOpen: false,
                });
              };

              return (
                <a href={`#${navlink}`} key={index} onClick={handleNavigation}>
                  <li
                    className={`mobile-link ${
                      selectedLink == navlink && "active"
                    }`}
                  >
                    {capitalised}
                  </li>
                </a>
              );
            })}

            <div className="flex gap-4">
              <Icon
                icon={darkMode ? "light_mode" : "dark_mode"}
                class="cursor-pointer w-7"
                onClick={toggleDarkTheme}
              />
              <DownloadCvWrapper>
                <Icon icon="download" class="cursor-pointer w-7" />
              </DownloadCvWrapper>
            </div>
          </ul>
        </div>
      )}
      <div className="navigation z-40">
        <img
          src={myImage}
          alt="logo"
          className={clsx("logo", { "opacity-0": mobileNavOpen })}
        />
        <div>
          {mobileNavOpen ? (
            <div
              className="cross-nav cursor-pointer"
              onClick={handleOpenMobileNavigation}
            >
              <span className="cross-nav-line top-left"></span>
              <span className="cross-nav-line top-right"></span>
            </div>
          ) : (
            <div
              className="flex flex-col justify-evenly items-end gap-[.525rem] cursor-pointer"
              onClick={handleOpenMobileNavigation}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
