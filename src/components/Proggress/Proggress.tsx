import React, { FC } from "react";
import {
  Container,
  Content,
  Progress,
  ProgressBar,
  ProgressPercent,
  ProgressTitle,
} from "./Proggress.styles";

const Proggress: FC<{
  title: string;
  percentage: number;
  align?: "rtl" | "ltr";
}> = ({ title, percentage, align = "rtl" }) => {
  return (
    <Container>
      <Content align={align}>
        <ProgressTitle>{title}</ProgressTitle>
        <ProgressPercent>{percentage}%</ProgressPercent>
      </Content>
      <ProgressBar align={align}>
        <Progress style={{ width: percentage + "%" }}></Progress>
      </ProgressBar>
    </Container>
  );
};

export default Proggress;
