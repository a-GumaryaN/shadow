import React from "react";
import Descrition from "../../components/DescriptionCard/DescriptionCard";
import Divider from "../../components/Divider/Divider";
import Hiro2 from "../../components/Hiro2/Hiro2";
import { banners } from "../../constants/images";
import Skills from "../../components/Skills/Skills";
import OurTeams from "../../containers/OurTeams/OurTeams";
import TestMonials from "../../containers/TestMonials/TestMonials";
import OurClients from "../../containers/OurClients/OurClients";
import OurServices from "../../containers/OurServices/OurServices";
import WorksCounter from "../../components/WorksCounter/WorksCounter";
import OurProcess from "../../containers/OurProcess/OurProcess";
import ContactUs from "../../containers/ContactUs2/ContactUs";

const AboutPage = () => {
  return (
    <>
      <Hiro2 image={banners.banner1} pageName="about us" />
      <Descrition />
      <Divider/>
      <Skills/>
      <Divider/>
      <OurTeams/> 
      <Divider/> 
      <TestMonials/>
      <OurClients/>
      <Divider/>
      <OurServices/>
      <WorksCounter/>
      <OurProcess/>
      <Divider/>
      <ContactUs/>
      
    </>
  );
};

export default AboutPage;
