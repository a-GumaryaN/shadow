import React from "react";
import Title from "../Title/Title";
import Proggress from "../Proggress/Proggress";
import { skills } from "../../constants/data";

import styled from "styled-components";

const Skills = () => {
  return (
    <SkillsContainer className="wrapped">
      <Title>skills</Title>
      <Container>
        <ProgressContainer>
          <h4>DESIGNER</h4>
          {skills.designer.map(({ title, percentage }) => {
            return <Proggress title={title} percentage={percentage} />;
          })}
        </ProgressContainer>

        <ProgressContainer>
          <h4>DEVELOPER</h4>
          {skills.designer.map(({ title, percentage }) => {
            return (
              <Proggress align="ltr" title={title} percentage={percentage} />
            );
          })}
        </ProgressContainer>
      </Container>
    </SkillsContainer>
  );
};

const SkillsContainer = styled.section`
  width: 100%;
  background-color: white;
  margin: auto;
  padding: 100px 10px;
  & > h3 {
    margin-bottom: 60px;
  }
  `;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 687px) {
    flex-direction: column;
  }
`;

const ProgressContainer = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;

  &:nth-of-type(1) {
    align-items: flex-end;
    margin-right: 20px;
  }

  & > h4 {
    font-size: 25px;
    font-weight: 700;
    letter-spacing: 2px;
  }

  & > * {
    margin-bottom: 40px;
  }
`;

export default Skills;
