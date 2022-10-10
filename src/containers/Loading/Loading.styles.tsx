import styled, { keyframes } from "styled-components";

export const scaleAnimation = keyframes`
from{
transform: scale(100%);
}

to {
    transform: scale(0%);
}
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MatrixContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: auto auto auto;
`;

export const MatrixItem = styled.div<{ animationDelay: number }>`
  width: 50px;
  height: 50px;
  background-color: #111;

  animation: ${scaleAnimation} 0.9s ease-in ${({animationDelay})=>animationDelay/10+'s'} infinite alternate;
  /* animation: name duration timing-function delay iteration-count direction fill-mode; */
`;
