import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 600px;
  margin-bottom: 60px;
`;

export const Content = styled.div`
  max-width: 70%;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 100px;
`;

export const Title1 = styled.p`
  font-size: 50px;
  font-weight: 600;
  color: #858585;
`;

export const Title2 = styled.h3`
  font-size: 80px;
  font-weight: 800;

  & > div {
    color: #858585;
    display: inline;
    position: relative;
    transition: all 1.5s ease;
  }
`;

export const Descrition = styled.h3`
  font-size: 30px;
  font-weight: 200;

  & > div {
    color: #858585;
    display: inline;
  }
`;
