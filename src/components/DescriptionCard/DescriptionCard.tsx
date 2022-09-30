import React from "react";
import styled from "styled-components";
import { about } from "../../constants/images";
import Button from "../Button/Button";
import PureTitle from "../PureTitle/PureTitle";
import {
  Section,
  Container,
  Description,
  Paragraph,
  Subtitle,
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

          <Button
            styles={{
              fontWeight: 600,
              fontSize: "14px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              padding: "10px 30px",
            }}
            className="black"
            onClick={() => {}}
          >
            hire us now!
          </Button>
        </Description>

        <img src={about} alt="about us" />
      </Container>
    </Section>
  );
};

const Title = styled(PureTitle)`
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 38px;
  letter-spacing: 5px;
`;

export default DescriptionCard;
