import React from "react";
import styled from "styled-components";
import { worksCounter } from "../../constants/data";
import TextCard2 from "../TextCard2/TextCard2";
import { banners } from "../../constants/images";
import { Container, Wrapper } from "./WorksCounter.styles";

const WorksCounter = () => {
  return (
    <Container image={banners.banner2} className="paralax">
      <Wrapper>
        {worksCounter.map(({ id, icon, description, number }) => {
          return (
            <TextCard2
              key={id}
              icon={icon}
              description={description}
              number={number}
            />
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default WorksCounter;
