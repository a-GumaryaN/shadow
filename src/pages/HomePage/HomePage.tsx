import React from "react";
import styled from "styled-components";
import Hiro from "../../components/Hiro1/Hiro1";
import Navbar from "../../components/Navbar/Navbar";
import Paralax from "../../components/Paralax/Paralax";
import { banners } from "../../constants/images";
import LatestWorks from "../../components/LatestWorks/LatestWorks";
import ContactUs from "../../components/ContactUs/ContactUs";

export default () => (
  <>
    <Paralax image={banners.banner1} />
    <Hiro />
    <LatestWorks />
    <ContactUs/>
  </>
);
