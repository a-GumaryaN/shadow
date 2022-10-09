import React from "react";
import styled from "styled-components";
import Carousel1 from "../../components/Carousel1/Carousel1";
import PureTitle from "../../components/PureTitle/PureTitle";
import { testmonials } from "../../constants/data";
import { banners } from "../../constants/images";
import { Container, Title, Wrapper } from "./TestMinials.styles";

const TestMonials = () => {
  return (
    <Container image={banners.banner2} className="paralax">
      <Title>testmonials</Title>
      <Wrapper>
      <Carousel1 contents={testmonials} />
      </Wrapper>
    </Container>
  );
};


export default TestMonials;
