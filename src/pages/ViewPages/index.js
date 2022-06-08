import React from "react";
import "./viewPagesStyle.scss";
import sa from "../../assets/sa.jpg";
import { Link, Navigate, useNavigate } from "react-router-dom";

const ViewPages = () => {
  const navigate = useNavigate();
  const listBox = [
    { title: "All Page ", img: sa, handlClick: () => navigate("/") },
    { title: "Home ", img: sa, handlClick: () => navigate("/home") },
    { title: "About", img: sa, handlClick: () => navigate("/about") },
  ];

  return (
    <div className="card-wrapper">
      <div className="card-container">
        {listBox.map((val) => {
          return (
            <div className="inner">
              <img src={val.img} alt="card-img" onClick={val.handlClick} />
              <div className="content">{val.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ViewPages;
