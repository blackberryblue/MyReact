import React, { useState } from "react";

const Input = () => {
  const [init, setInit] = useState(1);

  const numHandle = (e) => {
    console.log(e);
    setInit(e.target.value);
  };

  return (
    <div>
      <input type={"text"} onChange={numHandle} value={init} />
    </div>
  );
};

export default Input;
