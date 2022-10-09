import React from "react";
import { ourClients } from "../../constants/images";
import { Container, ListContainer, Subtitle, Title } from "./OurClients.styled";

const OurClients = () => {
  return (
    <Container>
      <Title>Take a look our clients</Title>
      <Subtitle>Big Brands trust us</Subtitle>
      <ListContainer className="wrapped">
        {ourClients.map((item) => {
          return (
            <li key={item}>
              <img src={item} alt="" />
            </li>
          );
        })}
      </ListContainer>
    </Container>
  );
};


export default OurClients;
