import Dropdown from "./Dropdown";
import { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [topBarActive, setTopBarActive] = useState(true);
  const [navBarActive, setNavBarActive] = useState(false);

  const closeTopBar = () => {
    setTopBarActive(!topBarActive);
  };
  const toggleNavBar = () => {
    setNavBarActive(!navBarActive);
  };

  return (
    <>
      {topBarActive && (
        <div className="topBar">
          <div className="topBarText">
            <span>merry christmas! 10% off sitewide</span>
            &nbsp; &nbsp;
            <i className="fa-solid fa-tree"></i>
          </div>
          <span className="topBarCloseBtn" onClick={closeTopBar}>
            ✖
          </span>
        </div>
      )}
      <section className="navBarBackground">
        <div className="navBar container">
          {!navBarActive && (
            <i
              className="fa-solid fa-bars-staggered navOpen"
              onClick={toggleNavBar}
            ></i>
          )}
          {navBarActive && (
            <i className="fa-solid fa-xmark navOpen" onClick={toggleNavBar}></i>
          )}

          <img className="img-fluid me-3 logo" src="/images/xlogo.svg" alt="" />

          <div className={`navToggleContent ${navBarActive ? "active" : ""}`}>
            <div className="navInputContainer">
              <input
                className="navInput"
                placeholder="Search your products"
                type="text"
              />
              <i className="fa-solid fa-magnifying-glass navInputIcon"></i>
            </div>
            <div className="countryDropdownContainer">
              <img
                className="ms-3 me-2"
                src="/images/country_germany.svg"
                alt="Germany"
              />
              <Dropdown label="(€) EUR" options={["(€) EUR", "($) USD"]} />
            </div>
            <Dropdown label="Country: DE 19% VAT." options={[]} />
            <div className="cartContainer">
              <img className="cart" src="/images/icon_cart.svg" alt="" />
              <span className="cartCount">0</span>
            </div>
            <img src="/images/icon_user.svg" alt="" />
          </div>
        </div>
      </section>
      <div className="container bottomBar">
        <ul className="bottomBarLinks">
          <li>
            <a href="#">all categories</a>
          </li>
          <li>
            <a href="#">brands</a>
          </li>
          <li>
            <a href="#">bathroom</a>
          </li>
          <li>
            <a href="#">kitchen</a>
          </li>
          <li>
            <a href="#">%sales</a>
          </li>
          <li>
            <a href="#">duration</a>
          </li>
          <li>
            <a href="#">villeroy &amp; boch</a>
          </li>
          <li className="bottomBarDropdown">
            <Dropdown
              label="all categories"
              options={[
                "brands",
                "bathroom",
                "kitchen",
                "%sales",
                "duration",
                "villeroy & boch",
              ]}
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
