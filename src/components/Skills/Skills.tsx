import React from "react";
import Title from "../PureTitle/PureTitle";
import Proggress from "../Proggress/Proggress";
import { skills } from "../../constants/data";

import styled from "styled-components";
import PureTitle from "../PureTitle/PureTitle";
import { Container, ProgressContainer, SkillsContainer } from "./Skills.styles";

const Skills = () => {
  return (
    <SkillsContainer className="wrapped">
      <PureTitle>skills</PureTitle>
      <Container>
        <ProgressContainer>
          <h4>DESIGNER</h4>
          {skills.designer.map(({ title, percentage }) => {
            return <Proggress key={title} title={title} percentage={percentage} />;
          })}
        </ProgressContainer>

        <ProgressContainer>
          <h4>DEVELOPER</h4>
          {skills.designer.map(({ title, percentage }) => {
            return (
              <Proggress key={title} align="ltr" title={title} percentage={percentage} />
            );
          })}
        </ProgressContainer>
      </Container>
    </SkillsContainer>
  );
};


export default Skills;
