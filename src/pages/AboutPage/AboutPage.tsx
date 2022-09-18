import React from "react";
import Descrition from "../../components/DescriptionCard/DescriptionCard";
import Divider from "../../components/Divider/Divider";
import Hiro2 from "../../components/Hiro2/Hiro2";
import Paralax from "../../components/Paralax/Paralax";
import { banners } from "../../constants/images";
import Skills from "../../components/Skills/Skills";
import OurTeams from "../../containers/OurTeams/OurTeams";

const AboutPage = () => {
  return (
    <>
      <Paralax image={banners.banner1} />
      <Hiro2 pageName="about us" />
      <Descrition />
      <Divider/>
      <Skills/>
      <Divider/>
      <OurTeams/>
      <Paralax image={banners.banner2}/>
      
    </>
  );
};

export default AboutPage;
