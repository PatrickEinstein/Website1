import React from "react";
import "./menu-items.css";

const MenuItem = ({ title, imageUrl }) => (
  <div className="menu-item">
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>

        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  </div>
);
export default MenuItem;