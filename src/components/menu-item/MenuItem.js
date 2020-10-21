import React from "react";
import "./menuItem.scss";

function MenuItem({ title, imageUrl, size }) {
  return (
    <>
      {/* Item--1 */}
      <div className={`${size} menu-item`}>
        <div className="backgroundImage" style={{
          backgroundImage: `url(${imageUrl})`,
        }}></div>
        <div className="content">
          <h1 className="title">{title.toUpperCase()} </h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </>
  );
}

export default MenuItem;
