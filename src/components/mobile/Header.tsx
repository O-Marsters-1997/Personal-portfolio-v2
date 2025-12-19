import { useState } from "react";
import clsx from "clsx";
import Icon from "@components/base/Icon";
import myImage from "@assets/images/logo.png";
import { storeMap } from "@utils/nanostore";
import { useStore } from "@nanostores/react";
import type { Store } from "@types";

type Navlink = "about" | "projects" | "writing" | "contact";

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState<null | Navlink>(null);
  const navlinks: Navlink[] = ["about", "projects", "writing", "contact"];

  const $store = useStore(storeMap) as Store;

  const handleOpenMobileNavigation = () => {
    setMobileNavOpen(!$store.mobileNavigationOpen);
    $store.mobileNavigationOpen = !$store.mobileNavigationOpen;
  };

  return (
    <>
      {mobileNavOpen && (
        <div className="bg-primary-dark h-[100vh] flex flex-col justify-center w-4/5 fixed right-0 z-20">
          <ul className="flex flex-col items-start justify-between ml-14 h-80 last:mt-4">
            {navlinks.map((navlink, index) => {
              const capitalised =
                navlink.charAt(0).toUpperCase() + navlink.slice(1);

              return (
                <a
                  href={`#${navlink}`}
                  key={index}
                  onClick={() => {
                    setSelectedLink(navlink);
                  }}
                >
                  <li
                    className={clsx("mobile-link", {
                      active: selectedLink === navlink,
                    })}
                  >
                    {capitalised}
                  </li>
                </a>
              );
            })}

            <div className="flex gap-4">
              <Icon icon="light_mode" class="cursor-pointer w-7" />
              <Icon icon="download" class="cursor-pointer w-7" />
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
            <button
              className="cross-nav cursor-pointer"
              onClick={handleOpenMobileNavigation}
            >
              <span className="cross-nav-line top-left"></span>
              <span className="cross-nav-line top-right"></span>
            </button>
          ) : (
            <button
              className="flex flex-col justify-evenly items-end gap-[.525rem] cursor-pointer"
              onClick={handleOpenMobileNavigation}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
