import React from "react";
import "./Banner.scss";

const Banner = (props) => (
  <div className="banner">
    <div className="drop-shadow curved curved-hz-1 banner__content-container">{props.children}</div>
  </div>
);

export default Banner;
