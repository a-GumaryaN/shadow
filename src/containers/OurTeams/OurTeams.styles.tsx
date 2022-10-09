import styled from "styled-components";

export const Container = styled.div`
background-color: white;
  width: 100%;
  padding: 100px 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ImageBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 687px) {
    flex-direction: column;
  }
`;