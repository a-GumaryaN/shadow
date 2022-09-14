import styled from "styled-components";

export const Container = styled.section`
  background-color: white;
  padding: 30px 0;
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;

  & > button {
    margin: 0 10px;
  }

  @media only screen and (max-width: 687px) {
    flex-direction: column;
    & > button {
      width: 90%;
      margin-bottom: 10px;
    }
  }
`;
