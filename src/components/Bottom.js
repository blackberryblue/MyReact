import React from "react";
import "../App.css";
//  버튼 증가 버튼!!
const Bottom = (props) => {
  console.log(props);

  return (
    <div>
      <h1 className="sub-container">Bouttom</h1>
      <button onClick={props.increase}>증가</button>
    </div>
  );
};

export default Bottom;
