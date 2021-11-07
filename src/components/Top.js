import React, { useState } from "react";
import "../App.css";
import SubTop from "./SubTop";

// 숫자를 디스플레이
const Top = (props) => {
  // const [number, setNumber] = useState(1);

  const { number } = props;

  return (
    <div className="sub-container">
      <h1>Top</h1>
      번호 : {props.number}
      <SubTop number={number} />
    </div>
  );
};

export default Top;
