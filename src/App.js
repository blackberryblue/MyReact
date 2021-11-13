import React from "react";
import { Route } from "react-router";
import Navbar from "./Components/Nav/Navbar";
import Input from "./Pages/Input";
import Method from "./Pages/Method";
import Routers from "./Routers/Routers";

const App = () => {
  return (
    <>
      <Navbar />
      <Routers />
    </>
  );
};

export default App;
