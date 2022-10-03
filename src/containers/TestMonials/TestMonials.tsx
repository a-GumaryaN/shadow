import React from "react";
import styled from "styled-components";
import Carousel1 from "../../components/Carousel1/Carousel1";
import PureTitle from "../../components/PureTitle/PureTitle";
import { testmonials } from "../../constants/data";
import { banners } from "../../constants/images";

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

const Container = styled.section<{ image: string }>`
  background-image: ${({ image }) => `url(${image})`};
  padding: 80px 100px;
`;

const Wrapper = styled.div`
display: flex;
&:before{
    content: "\f10e";
    color: white;
    font-size: 30px;
    font-family: FontAwesome;
    margin-right: 15px;
}
`;

const Title = styled(PureTitle)`
  color: white;
  font-size: 35px;
  margin-bottom: 30px;
`;

export default TestMonials;
