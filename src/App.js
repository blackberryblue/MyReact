import React from "react";
import Navbar from "./Components/Nav/Navbar";
import Routers from "./Routers/Routers";
import styled from "styled-components";

const App = () => {
  return (
    <Center>
      <Navbar />
      <Routers />
    </Center>
  );
};

export default App;

const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 1300px;
  margin: auto;
  background-color: blanchedalmond;
`;
