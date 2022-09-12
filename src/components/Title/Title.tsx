import React, { FC } from "react";
import styled, { CSSProperties } from "styled-components";
const Container = styled.h3`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 30px;
  letter-spacing: 5px;
  &::after {
    content: "";
    width: 35px;
    height: 2px;
    background-color: #dedede;
    display: block;
    margin-top: 20px;
  }

  @media only screen and (max-width: 687px) {
    margin-bottom: 30px;
  }
`;

const Title: FC<{ children: string; styles?: CSSProperties }> = ({
  children,
  styles,
}) => {
  return <Container style={styles}>{children}</Container>;
};

export default Title;
