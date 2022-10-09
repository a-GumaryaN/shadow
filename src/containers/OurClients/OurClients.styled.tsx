import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 10px;
`;

export const Title = styled.h4`
  font-size: 30px;
  letter-spacing: 1px;
  margin-bottom: 30px;
`;

export const Subtitle = styled.h4`
  font-size: 20px;
  letter-spacing: 2px;
  font-weight: 200;
  margin-bottom: 30px;
`;

export const ListContainer = styled.ul`
  display: grid;

  grid-template-columns: auto;

  @media only screen and (min-width: 567px) {
    grid-template-columns: auto auto auto;
  }

  @media only screen and (min-width: 992px) {
    grid-template-columns: auto auto auto auto auto auto;
  }
`;