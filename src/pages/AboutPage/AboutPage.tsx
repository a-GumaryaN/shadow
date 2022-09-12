import React from "react";
import Descrition from "../../components/DescriptionCard/DescriptionCard";
import Divider from "../../components/Divider/Divider";
import Hiro2 from "../../components/Hiro2/Hiro2";
import Paralax from "../../components/Paralax/Paralax";
import { banners } from "../../constants/images";

const AboutPage = () => {
  return (
    <>
      <Paralax image={banners.banner1} />
      <Hiro2 pageName="about us" />
      <Descrition />
      <Divider/>
    </>
  );
};

export default AboutPage;