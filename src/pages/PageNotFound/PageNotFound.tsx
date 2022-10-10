import React from "react";
import { Container, GoToHome, Title } from "./PageNotFound.styled";

const PageNotFound = () => {
  return (
    <Container>
      <Title>page not found ):</Title>
      <GoToHome to="/">Let's take you home (:</GoToHome>
    </Container>
  );
};

export default PageNotFound;
