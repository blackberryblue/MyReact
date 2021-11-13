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

      <h2>
        4번째 box를 페이지 마지막에 두기~ :.box3:nth-of-type(4)가 적용이 되지
        않는다.
      </h2>
      <div className="box3"></div>
      <div className="box3"></div>
      <div className="box3"></div>
      <div className="box3"></div>
    </div>
  );
};
