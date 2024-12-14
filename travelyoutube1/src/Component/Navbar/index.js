import React, { useState } from "react";
import "./index.css";
import { MdTravelExplore } from "react-icons/md";
import { IoCloseCircleSharp } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const [active, setactive] = useState("navBar");

  const showNav = () => {
    setactive("navBar activeNavBar");
  };

  const removeNav = () => {
    setactive("navBar");
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <MdTravelExplore className="icon" /> Travel.
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navList flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Package
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Shop
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                About
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Pages
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                News
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>
            <button className="btn">
              <a href="#">BOOK NOW</a>
            </button>
          </ul>
          <div onClick={removeNav} className="closeNavBar">
            <IoCloseCircleSharp className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toogleNavBar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
