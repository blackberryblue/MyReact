import React from "react";
import { useSelector } from "react-redux";

const SubTop = () => {
  const { number } = useSelector((store) => store);

  return (
    <div>
      <h2>SubTop</h2>
      번호 : {number}
    </div>
  );
};

export default SubTop;
