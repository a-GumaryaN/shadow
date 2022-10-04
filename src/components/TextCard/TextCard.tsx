import React, { FC } from "react";
import styled from "styled-components";
import PureTitle from "../PureTitle/PureTitle";

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

const Container = styled.div`
  display: flex;
`;

const Icon = styled.i`
  font-size: 30px;
  margin-top: 3px;
  margin-right: 30px;
`;

const Wrapper = styled.div`
max-width: 350px;
`;

const Title = styled(PureTitle)`
font-size: 18px;
margin-bottom: 20px;
`;
const Description = styled.p`
font-size: 14px;
font-weight: 300;
line-height: 20px;
letter-spacing: 1px;
color: #999;
`;

export default TextCard;
