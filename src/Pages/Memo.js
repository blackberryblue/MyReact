import React from "react";

const Memo = () => {
  let point = 75;
  let name; //undefined 타입
  let list = [1, 2, 3, 4];

  return (
    <div>
      <div>{point >= 60 ? "합격" : "불합격"}</div>
      <div>{name ?? "홍길동"}</div>
      {list.map((data) => (
        <div>{data}</div>
      ))}
    </div>
  );
};

export default Memo;
