import React from "react";
import "../../Style/AlineSelf.css";

const AlineSelf = () => {
  return (
    <div className="center">
      <h1>AlineSelf</h1>
      <p>
        justify-content,align-item는 부모가 자식을 옮겨온 반면,실제 wrapper의
        자식을 수정하는 경우에 해당한다.
        <br />
        Aline-Self과 order는 자식에게 바로 적용가는 한 유일한 속성이다.
      </p>
      <div className="wrapper3">
        <div className="box3">1</div>
        <div className="box3">2</div>
        <div className="box3">3</div>
        <div className="box3">4</div>
      </div>
    </div>
  );
};

export default AlineSelf;
