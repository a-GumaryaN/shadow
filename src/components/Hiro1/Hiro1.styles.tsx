import styled from "styled-components";

export const Container = styled.div<{image:string}>`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: ${ ({image})=>(`url(${image})`) };
  height: 700px;
  background-color: 0;
`;

export const Content = styled.div`
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
  letter-spacing: 3px;

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
