import React from "react";
import { NavLink } from "react-router-dom";

const NavMenu = (props) => {
  const { path, title, style } = props;
  return (
    <>
      <NavLink to={path} style={style}>
        {title}
      </NavLink>
    </>
  );
};

export default NavMenu;
