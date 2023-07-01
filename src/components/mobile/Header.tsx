import { useState } from "react";
import myImage from "@assets/images/logo.png";

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="navigation">
      <img src={myImage} alt="logo" className="logo" />
      <>
        {!mobileNavOpen ? (
          <div className="cross-nav">
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
      </>
    </div>
  );
};

export default Header;
