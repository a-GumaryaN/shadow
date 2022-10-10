import React, { useMemo } from "react";
import styled, { keyframes } from "styled-components";
import { Container, MatrixContainer, MatrixItem } from "./Loading.styles";

const Loading = () => {
  const matrixes: any = [];
  useMemo(() => {
    for (let index = 0; index < 9; index++)
      matrixes.push(<MatrixItem key={index} animationDelay={index} />);
    console.log("run...");
  }, []);

  return (
    <Container>
      <MatrixContainer>{matrixes}</MatrixContainer>
    </Container>
  );
};

export default Loading;
