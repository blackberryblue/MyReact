import React from "react";
import { Route, Routes } from "react-router";
import AlineSelf from "../Pages/Flexbox/AlineSelf";
import Axis from "../Pages/Flexbox/Axis";
import Frf from "../Pages/Flexbox/Frf";
import Lbf from "../Pages/Flexbox/Lbf";
import HomePage from "../Pages/Home/HomePage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/LifeofBeforeFlexbox" element={<Lbf />} />
      <Route path="/FristRuleofFlexbox" element={<Frf />} />
      <Route path="/MainAxis" element={<Axis />} />
      <Route path="/AlineSelf" element={<AlineSelf />} />
    </Routes>
  );
};

export default Routers;
