import React from "react";
import "./sideArrowStyle.scss";
import Arrow from "../../assets/arrow.png";
import { useNavigate, Link } from "react-router-dom";

const SideArrow = ({ path }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="side-arrow">
        <Link to={`${path}`} className="arrow">
          <img src={Arrow} />
        </Link>
      </div>
    </>
  );
};

export default SideArrow;
