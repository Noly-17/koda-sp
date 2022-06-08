import React from "react";
import "./widgetsStyle.scss";
import { Link } from "react-router-dom";

const Widgets = ({ redirect }) => {
  return (
    <>
      <div className="widget-wrapper">
        <Link to={`${redirect}`} className="screens">
          Screen
        </Link>
      </div>
    </>
  );
};

export default Widgets;
