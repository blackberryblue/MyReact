import React from "react";
import "../App.css";
import SubBottom from "./SubBottom";
//  버튼 증가 버튼!!
const Bottom = (props) => {
  console.log(props);

  // const id = props.id;
  // const name = props.name;
  // const increase = props.increase;

  //구조 분할 할당
  // const { increase } = props;

  const { increase } = props;

  return (
    <div className="sub-container">
      <h1>Bouttom</h1>
      {/* <button onClick={increase}>증가</button> */}
      <SubBottom subIncrease={increase} />
    </div>
  );
};

export default Bottom;
