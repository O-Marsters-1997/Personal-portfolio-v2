import { useState } from "react";
import Icon from "@components/base/Icon";
import myImage from "@assets/images/logo.png";

type Navlink = "about" | "projects" | "writing" | "contact";

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState<null | Navlink>(null);

  const navlinks: Navlink[] = ["about", "projects", "writing", "contact"];

  return (
    <>
      {mobileNavOpen && (
        <div className="mobile-navigation ">
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
        <div onClick={() => setMobileNavOpen(!mobileNavOpen)}>
          {mobileNavOpen ? (
            <div className="cross-nav" onClick={() => setSelectedLink(null)}>
              <span className="cross-nav-line top-left"></span>
              <span className="cross-nav-line top-right"></span>
            </div>
          ) : (
            <div className="flex flex-col justify-evenly items-end gap-[.525rem] cursor-pointer">
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
