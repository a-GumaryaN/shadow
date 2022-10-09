import React, { FC } from "react";
import styled from "styled-components";
import PureTitle from "../PureTitle/PureTitle";
import { Container, Description, Icon, Title, Wrapper } from "./TextCard.styles";

const TextCard: FC<{
  icon: string;
  description: string;
  title: string;
}> = ({ icon, description, title }) => {
  return (
    <Container>
      <Icon className={`fa ${icon}`}></Icon>
      <Wrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Wrapper>
    </Container>
  );
};



export default TextCard;
