import React from "react";
import Hiro from "../../components/Hiro/Hiro";
import Navbar from "../../components/Navbar/Navbar";
import Paralax from "../../components/Paralax/Paralax";
import HomePageStyled from "./HomePage.styles";
import { banners } from "../../constants/images";

const HomePage = () => {
  return (
     <>
      <Navbar />
    <HomePageStyled>
      <Paralax image={banners.banner1}/>
      <Hiro/>
    </HomePageStyled>
    </>
  );
};

export default HomePage;
