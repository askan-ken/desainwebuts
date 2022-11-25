import React, { useState } from "react";
import "./Navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/tanggamus.png";
const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#pemerintahan">Pemerintahan Desa</a>
    </p>
    <p>
      <a href="#data">Data Desa</a>
    </p>
    <p>
      <a href="#profile">Profile Desa</a>
    </p>
    <p>
      <a href="#surat">Surat Online</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [fix, setFix] = useState(false)
  function setFixed() {
    if (window.scrollY >= 100){
      setFix(true)
    }else {
      setFix(false)
    }
  }
  return (
    <div className="desa__navbar">
      <div className="desa__navbar-links">
        <div className="desa__navbar-links_logo">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="desa__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="desa__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="desa__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="white"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="white"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="desa__navbar-menu_container scale-up-center">
            <div className="desa__navbar-menu_container-links">
              <Menu />
              <div className="desa__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
