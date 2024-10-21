import { useState } from "react";
import clsx from "clsx";
import Icon from "@components/base/Icon";
import Link from "@components/base/Link";
import { useStore } from "@nanostores/react";
import { storeMap } from "@utils/nanostore";
import { downloadPdf, toggleDarkTheme, accessibleOnClick } from "@utils/common";
import logo from "@assets/images/logo.png";
import lightLogo from "@assets/images/light_logo.png";

type Navlink = "about" | "projects" | "writing" | "contact";

interface Props {
  className: string;
}

const Header = ({ className }: Props) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState<null | Navlink>(null);
  const { darkMode } = useStore(storeMap);
  const navlinks: Navlink[] = ["about", "projects", "contact"];

  const handleOpenMobileNavigation = () => {
    setMobileNavOpen(!mobileNavOpen);
    storeMap.set({
      mobileNavigationOpen: !storeMap.get().mobileNavigationOpen,
      ...storeMap.get(),
    });
  };

  return (
    <>
      {mobileNavOpen && (
        <div
          className={clsx(
            "dark:bg-dark-primary-dark bg-light-primary-main h-[100vh] flex flex-col justify-center w-4/5 fixed right-0 z-20",
            className && className
          )}
        >
          <ul className="flex flex-col items-start justify-between ml-14 h-80 last:mt-4">
            {navlinks.map((navlink, index) => {
              const capitalised =
                navlink.charAt(0).toUpperCase() + navlink.slice(1);

              const handleNavigation = () => {
                setSelectedLink(navlink);
                setMobileNavOpen(false);
                storeMap.set({
                  ...storeMap.get(),
                  mobileNavigationOpen: false,
                });
              };

              return (
                <Link to={`${navlink}`} key={index} onClick={handleNavigation}>
                  <li
                    className={`mobile-link ${
                      selectedLink === navlink ? "active" : ""
                    }`}
                  >
                    {capitalised}
                  </li>
                </Link>
              );
            })}

            <div className="flex gap-4" id="testing">
              <Icon
                icon={darkMode ? "light_mode" : "dark_mode"}
                class="cursor-pointer w-7"
                {...accessibleOnClick(toggleDarkTheme)}
              />
              <Icon
                icon="download"
                class="cursor-pointer w-7"
                {...accessibleOnClick(downloadPdf)}
              />
            </div>
          </ul>
        </div>
      )}
      <div className={clsx("navigation z-40", className && className)}>
        <a href="/" className="w-full">
          <img
            src={darkMode ? logo.src : lightLogo.src}
            alt="logo"
            className={clsx("logo", { "opacity-0": mobileNavOpen })}
          />
        </a>
        <div>
          {mobileNavOpen ? (
            <div
              className="cross-nav cursor-pointer"
              {...accessibleOnClick(handleOpenMobileNavigation)}
            >
              <span className="cross-nav-line top-left"></span>
              <span className="cross-nav-line top-right"></span>
            </div>
          ) : (
            <div
              className="hamburger flex flex-col justify-evenly items-end gap-[.525rem] cursor-pointer"
              {...accessibleOnClick(handleOpenMobileNavigation)}
              aria-label="hamburger"
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
