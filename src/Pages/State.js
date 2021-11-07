import React, { useState } from "react";
import Bottom from "../components/Bottom";
import Top from "../components/Top";
import "../App.css";

const State = () => {
  const [number, setNumber] = useState(1004);

  const increase = () => {
    setNumber(number + 1);
  };

  return (
    <div className="container">
      <h1>State App</h1>
      <Top number={number} />
      <Bottom increase={increase} />
    </div>
  );
};

export default State;
