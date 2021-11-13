import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/LifeofBeforeFlexbox">LifeofBeforeFlexbox</Link> {" | "}
      <Link to="/FristRuleofFlexbox">FirstRouleofFlexbox</Link>
      {" | "}
      <Link to="/MainAxis">Main Axis and Cross Axis</Link>
    </nav>
  );
};

export default Navbar;
