import React from "react";
import "../App.css";
//  버튼 증가 버튼!!
const Bottom = (props) => {
  console.log(props);

  // const id = props.id;
  // const name = props.name;
  // const increase = props.increase;

  //구조 분할 할당
  const { id, nanme, increase } = props;

  return (
    <div>
      <h1 className="sub-container">Bouttom</h1>
      <button onClick={increase}>증가</button>
    </div>
  );
};

export default Bottom;
