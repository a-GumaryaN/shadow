import React, { FC } from "react";
import {
  Header,
  HeaderTitle,
  Number,
  Icon,
  Title,
  Description,
} from "./TextCard3.styles";

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
      <Description>{description}</Description>
    </div>
  );
};

export default TextCard3;
