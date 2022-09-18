import styled from "styled-components";

export const Container = styled.div`
overflow: hidden;
position: relative;
  &:hover& > img {
    transform: scale(1.05);
  }

  &:hover{
      background-color: rgba(0 0 0 ,0.6);
  }
`;
