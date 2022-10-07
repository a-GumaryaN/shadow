import React, { FC } from "react";
import styled from "styled-components";
import PureTitle from "../PureTitle/PureTitle";

const TextCard3: FC<{
  id: number;
  icon: string;
  title: string;
  description: string;
}> = ({ id, icon, title, description }) => {
  return (
    <div>
      <Header>
        <Number>{id}</Number>
        <HeaderTitle>
          <Icon className={`fa ${icon}`} />
          <Title>{title}</Title>
        </HeaderTitle>
      </Header>
      <Description>
        {description}
      </Description>
    </div>
  );
};

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const Number = styled.p`
  font-size: 100px;
  font-weight: 400;
  color: #dedede;
`;

const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.i`
  font-size: 35px;
  margin-bottom: 15px;
`;

const Title = styled(PureTitle)`
  font-weight: 700;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Description= styled.p`
  color: #666666;
  font-weight: 200;
  letter-spacing: 1px;
  text-align: center;

`;

export default TextCard3;
