import React, { useState } from "react";
import "../App.css";

// 숫자를 디스플레이
const Top = (props) => {
  // const [number, setNumber] = useState(1);

  return (
    <div className="sub-container">
      <h1>Top</h1>
      번호 : {props.number}
    </div>
  );
};

export default Top;
