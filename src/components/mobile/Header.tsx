import { useState } from "react";
import { useStore } from "@nanostores/react";
import Icon from "@components/base/Icon";
import myImage from "@assets/images/logo.png";
import { storeMap } from "@utils/nanostore";

type Navlink = "about" | "projects" | "writing" | "contact";

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState<null | Navlink>(null);
  const navlinks: Navlink[] = ["about", "projects", "writing", "contact"];

  const $storeMap = useStore(storeMap);

  const handleOpenMobileNavigation = () => {
    setMobileNavOpen(!mobileNavOpen);
    storeMap.set({
      ...storeMap,
      mobileNavigationOpen: !storeMap.get().mobileNavigationOpen,
    });
    console.log(storeMap.get().mobileNavigationOpen);
  };

  return (
    <>
      {mobileNavOpen && (
        <div className="mobile-navigation">
          <ul className="flex flex-col items-start justify-between ml-14 h-80">
            {navlinks.map((navlink, index) => {
              const capitalised =
                navlink.charAt(0).toUpperCase() + navlink.slice(1);

              return (
                <a
                  href={`#${navlink}`}
                  key={index}
                  onClick={() => setSelectedLink(navlink)}
                >
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
              <Icon icon="light_mode" class="cursor-pointer w-7" />
              <Icon icon="download" class="cursor-pointer w-7" />
            </div>
          </ul>
        </div>
      )}
      <div className="navigation">
        <img src={myImage} alt="logo" className="logo" />
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
