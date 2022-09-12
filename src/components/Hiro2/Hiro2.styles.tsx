import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h3`
  text-transform: uppercase;
  font-size: 100px;
  font-weight: 700;

  & > span {
    color: #999;
    position: relative;
    transition: all 1s ease;
    opacity: 0;
  }
`;

export const PageName = styled.p`
color: black;
`;
