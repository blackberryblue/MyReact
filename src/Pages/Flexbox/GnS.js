import React from "react";
import "../../Style/GaS.css";

const GnS = () => {
  return (
    <div className="center">
      <h1>flex-grow and flex-shrink</h1>
      <p>
        {" "}
        grow,shrink는 property에 속한다. 반응형을 만들때 유용하다.grow의 기본
        값은 1에 해당한다. shrink는 0,
        <br />
        grow는 화면 비율이 커질 때 flex값들도 함께 커진다. shink는 작아질때 함께
        작아진다.
      </p>
      <div className="wrapper4">
        <div className="box4">1</div>
        <div className="box4">2</div>
        <div className="box4">3</div>
        <div className="box4">4</div>
      </div>
    </div>
  );
};

export default GnS;
