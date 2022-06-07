import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./navbarStyle.scss";

// components imported
import NavMenu from "../Global/NavMenu";
import SideArrow from "../SideArrow";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [menu, setMenu] = useState(1);

  const list = [
    { id: 1, title: "Home", isActive: menu === 1 && "is-active", path: "/" },
    {
      id: 1,
      title: "About",
      isActive: menu === 2 && "is-active",
      path: "/about",
    },
    {
      id: 3,
      title: "Services",
      isActive: menu === 3 && "is-active",
      path: "/services",
    },
    {
      id: 4,
      title: "Our Team",
      isActive: menu === 4 && "is-active",
      path: "/our-team",
    },
    {
      id: 5,
      title: "News",
      isActive: menu === 4 && "is-active",
      path: "/news",
    },
    {
      id: 6,
      title: "Careers",
      isActive: menu === 4 && "is-active",
      path: "/careers",
    },
  ];

  const span1 = {
    transform: isToggle ? "translate(0px, -2px) rotate(45deg)" : "",
    // transition: "transform 150ms ease",
  };

  const span2 = {
    opacity: isToggle && 0,
    transform: isToggle ? "translateX(15px)" : "",
  };

  const span3 = {
    transform: isToggle ? "translate(-3px, 3px) rotate(-45deg)" : "",
    // transition: "transform 150ms ease",
  };

  const style = {
    fontSize: "1.5rem",
    textDecoration: "none",
    color: "white",
  };

  return (
    <>
      <nav>
        <div className="container">
          <div>
            <Link to="/" className="site-title">
              <img src={Logo} />
            </Link>
          </div>
          <div>
            <button
              className="hamburger active"
              onClick={() => setIsToggle(!isToggle)}
            >
              <span style={span1}></span>
              <span style={span2}></span>
              <span style={span3}></span>
            </button>
          </div>
          <div className="menu">
            <div className="list">
              <ul>
                {list.map((val) => (
                  <>
                    <li
                      key={val.id}
                      className={val.isActive}
                      onClick={() => setMenu(val.id)}
                    >
                      <NavMenu
                        path={val.path}
                        title={val.title}
                        style={style}
                      />
                    </li>
                  </>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
