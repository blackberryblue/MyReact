import React from "react";
import "../../Style/Flexbox.css";

const Lbf = () => {
  return (
    <div>
      <h1>block(box) vs inline</h1>

      <h2>box:한줄 전체 margin을 가지고 있다</h2>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>

      <h2>
        inline:element이며 box가 아니다.display: inline-block;를 사용했음(React)
      </h2>
      <div className="box2"></div>
      <div className="box2"></div>
      <div className="box2"></div>
      <div className="box2"></div>

      <h2>3번째 box를 페이지 마지막에 두기~</h2>
      <div className="box3"></div>
      <div className="box3"></div>
      <div className="box3"></div>
      <div className="box3"></div>
    </div>
  );
};

export default Lbf;
