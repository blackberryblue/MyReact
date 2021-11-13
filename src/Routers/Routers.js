import React from "react";
import { Route, Routes } from "react-router";
import Lbf from "../Pages/Flexbox/Lbf";
import HomePage from "../Pages/Home/HomePage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/LifeofBeforeFlexbox" element={<Lbf />} />
    </Routes>
  );
};

export default Routers;
