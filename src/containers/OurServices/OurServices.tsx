import React from "react";
import styled from "styled-components";
import PureTitle from "../../components/PureTitle/PureTitle";
import TextCard from "../../components/TextCard/TextCard";
import { ourServices } from "../../constants/data";

const OurServices = () => {
  return (
    <Container>
      <Wrapper>
        <Title>our services</Title>
        <CardContainer>
          {ourServices.map(({ id, icon, title, description }) => {
            return (
              <TextCard
                key={id}
                icon={icon}
                title={title}
                description={description}
              />
            );
          })}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  padding: 100px 20px;
`;

const Wrapper = styled.div`
  max-width: 1000px;
  margin: auto;
`;

const Title = styled(PureTitle)`
  margin-bottom: 60px;
`;

const CardContainer = styled.div`
  display: grid;

  gap: 30px;

  align-items: center;

  grid-template-columns: auto;

  @media only screen and (min-width: 687px) {
    grid-template-columns: auto auto;
  }

  @media only screen and (min-width: 992px) {
    grid-template-columns: auto auto auto;
  }
`;

export default OurServices;
