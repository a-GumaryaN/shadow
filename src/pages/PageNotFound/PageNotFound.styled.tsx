import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.p`
  color: #222;
  font-size: 50px;
  font-weight: 600;
  text-transform: capitalize;
  margin-bottom: 30px;
`;


export const GoToHome = styled(Link)`
 color: green;
  font-size: 30px;
  font-weight: 600;
  position: relative;
  right: 10px;
  opacity: 0.6;
  transition: all 0.4s ease-in-out;
  
  &:hover{
      right: 0;
      opacity:1;
  }
`;