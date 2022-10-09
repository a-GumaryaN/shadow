import React from "react";
import TextCard from "../../components/TextCard/TextCard";
import { ourServices } from "../../constants/data";
import { CardContainer, Container, Title, Wrapper } from "./OurServices.styles";

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

export default OurServices;
