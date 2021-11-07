import React, { useState } from "react";

// 클래스형 컴포넌트 => 함수형  => hooks => 리덕스(Rx) => Mobx(Rx)

//화살표 함수 (람다)
//일반 함수
//함수 이름

const Method = () => {
  // 일반 변수와 상태 변수의 차이
  const [num, setNum] = useState(1);

  let count = 1;

  //함수 생성 방법  = 기본 함수
  function add() {
    count++;
    console.log(count);

    setNum(num + 1);
    console.log(num);
  }

  // 함수 생성 방법 = 기본 함수
  const increase = () => {};

  return (
    <div>
      <h1>
        num : {num} count = {count}
      </h1>
      {/* 익명 함수 */}
      <button onClick={function () {}}>익명함수</button>
      <br />
      <button onClick={() => {}}>화살표함수</button>
      <br />
      {/* {}안에는 험수의 주소값이 들어가야한다.  */}
      <button onClick={add}>
        화살표함수()가 있으면 함수를 호출한다는 의미 클릭이벤트 없이 바로 실행이
        된다.
      </button>
      <br />
      <button onClick={() => add(1)}>람다로 add(1)</button>
      <br />
      <button
        onClick={() => {
          console.log("ddd");
          return add(1);
        }}
      >
        return
      </button>
      <br />
      <button onClick={increase}></button>
    </div>
  );
};

export default Method;
