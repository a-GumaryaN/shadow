import React, { FC } from "react";
import {
  Container,
  Content,
  Progress,
  ProgressBar,
  ProgressPercent,
  ProgressTitle,
} from "./Proggress.styles";

import { useInView } from "react-intersection-observer";

const Proggress: FC<{
  title: string;
  percentage: number;
  align?: "rtl" | "ltr";
}> = ({ title, percentage, align = "rtl" }) => {
  const { inView, ref } = useInView({threshold:1});

  return (
    <Container ref={ref}>
      <Content align={align}>
        <ProgressTitle>{title}</ProgressTitle>
        <ProgressPercent>{inView ? percentage : 0}%</ProgressPercent>
      </Content>
      <ProgressBar align={align}>
        <Progress style={{ width: inView ? percentage + "%" : 0 }}></Progress>
      </ProgressBar>
    </Container>
  );
};

export default Proggress;
