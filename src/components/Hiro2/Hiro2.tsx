import React, { FC } from "react";
import { Container, PageName, Title } from "./Hiro2.styles";
import { useInView } from "react-intersection-observer";

const Hiro2: FC<{ pageName: string }> = ({ pageName }) => {
  const { inView, ref } = useInView({ threshold: 0.8 });

  return (
    <Container ref={ref}>
      <Title>
        sha
        <span
          style={{ left: inView ? "0" : "-20px", opacity: inView ? "1" : "0" }}
        >
          dow
        </span>
      </Title>

      <PageName>-{pageName}-</PageName>
    </Container>
  );
};

export default Hiro2;
