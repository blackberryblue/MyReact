import React from "react";
import "../../Style/Flexbox.css";

const Frf = () => {
  return (
    <div>
      <h1>Frist Role of Flexbox</h1>
      <h3>flexbox container를 box 바깥에 만들 것</h3>
      <p>
        박스의 부모가 flex container이다. 기억해둘 것은 항상!!!!!! 붙어있는
        부모가 자식의 위치를 움직일 수 있다.
      </p>
      <body>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div>
          <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div>wrapper는 붙어있는 부모가 아니어서 적용 되지 않았다.</div>
            <div className="wrapper">
              <div>
                <div className="box4"></div>
                <div className="box4"></div>
                <div className="box4"></div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Frf;
