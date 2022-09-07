import React from "react";
import Hiro from "../../components/Hiro/Hiro";
import Navbar from "../../components/Navbar/Navbar";
import HomePageStyled from "./HomePage.styles";

const HomePage = () => {
  return (
    <HomePageStyled>
      <Navbar />
      <Hiro/>
    </HomePageStyled>
  );
};

export default HomePage;
