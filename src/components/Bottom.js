import React from "react";
import "../App.css";
//  버튼 증가 버튼!!
const Bottom = (props) => {
  console.log(props);

  const increase = props.increase;

  return (
    <div>
      <h1 className="sub-container">Bouttom</h1>
      <button onClick={increase}>증가</button>
    </div>
  );
};

export default Bottom;
