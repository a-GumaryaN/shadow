import React from "react";
import styled from "styled-components";
import { about } from "../../constants/images";
import PureBotton from "../PureBotton/PureBotton";
import PureTitle from "../PureTitle/PureTitle";
import {
  Section,
  Container,
  Description,
  Paragraph,
  Subtitle,
  Title,
  Botton,
} from "./DescriptionCard.styles";

const DescriptionCard = () => {
  return (
    <Section>
      <Container>
        <Description>
          <Title>about us</Title>
          <Subtitle>We are Creative, Innovative, and Positive.</Subtitle>
          <Paragraph>
            Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident consectetur
            adipisicing elit.
          </Paragraph>

          <Paragraph>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.{" "}
          </Paragraph>

          <Botton className="black" onClick={() => {}}>
            hire us now!
          </Botton>
        </Description>

        <img src={about} alt="about us" />
      </Container>
    </Section>
  );
};



export default DescriptionCard;
