import styled from "styled-components";

export const Container = styled.div`
  padding: 100px 10px;
`;

export const Wrapped = styled.div`
  max-width: 1200px;
  display: flex;

  @media only screen and (max-width:567px){
    flex-direction: column;
  }
`;
