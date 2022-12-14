import { FC } from "react";
import styled from "styled-components";

export default styled.button`
  border: 1px solid black;
  background-color: 0;
  padding: 10px 25px;
  border-radius: 50px;
  cursor: pointer;

  & {
    color: black;
    background-color: white;
  }

  &.black {
    color: white;
    background-color: black;
  }
  &.black:hover {
    background-color: rgba(0, 0, 0, 0);
    color: black;
  }

  @media only screen and (max-width: 687px) {
    width: 100%;
  }
`;
