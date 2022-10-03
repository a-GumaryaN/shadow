import React from "react";
import Descrition from "../../components/DescriptionCard/DescriptionCard";
import Divider from "../../components/Divider/Divider";
import Hiro2 from "../../components/Hiro2/Hiro2";
import { banners } from "../../constants/images";
import Skills from "../../components/Skills/Skills";
import OurTeams from "../../containers/OurTeams/OurTeams";
import TestMonials from "../../containers/TestMonials/TestMonials";

const AboutPage = () => {
  return (
    <>
      <Hiro2 image={banners.banner1} pageName="about us" />
      <Descrition />
      <Divider/>
      <Skills/>
      <Divider/>
      <OurTeams/>
      <TestMonials/>
      
    </>
  );
};

export default AboutPage;
