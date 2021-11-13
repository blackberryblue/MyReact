import React from "react";
import "../../Style/Axis.css";

const Axis = () => {
  return (
    <div className="center">
      <h1>Main Axis and Cross Axis</h1>
      <p>
        justify-content 는 main Axis | align-items는 cross Axis width or
        height가 있어야 cross Axis가 적용된다.
      </p>
      <div className="wrapper">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </div>
  );
};

export default Axis;
