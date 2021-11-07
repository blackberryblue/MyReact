import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { increase } from "../store";

const SubBottom = () => {
  // const [init, setInit] = useState(`SubTop 반영 : ${122}`);

  const dispatcher = useDispatch();

  return (
    <div>
      <button onClick={() => dispatcher(increase())}>서브 Bottom</button>
    </div>
  );
};

export default SubBottom;
