import React, { useMemo } from "react";
import styled, { keyframes } from "styled-components";
import { Container, MatrixContainer, MatrixItem } from "./Loading2.styles";

const indexArray = [2, 3, 4, 1, 2, 3, 0, 1, 2];

const Loading2 = () => {
  const matrixes: any = [];
  useMemo(() => {
    indexArray.map((index) => {
      matrixes.push(<MatrixItem key={index} animationDelay={index} />);
    });
  }, []);

  return (
    <Container>
      <MatrixContainer>{matrixes}</MatrixContainer>
    </Container>
  );
};

export default Loading2;
