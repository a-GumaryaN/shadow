import React from "react";
import ourTeams from "../../constants/data/ourTeam.data";
import ImageCard from "../../components/ImageCard/ImageCard";
import styled from "styled-components";
import PureTitle from "../../components/PureTitle/PureTitle";
import { Container, ImageBox } from "./OurTeams.styles";

const OurTeams = () => {
  return (
    <Container className="wrapped">
      <PureTitle>meet the team</PureTitle>
      <ImageBox>
        {ourTeams.map(
          ({
            id,
            image,
            firstName,
            lastName,
            part,
            gmail,
            twitter,
            facebook,
          }) => {
            return (
              <ImageCard
                key={id}
                image={image}
                firstName={firstName}
                lastName={lastName}
                part={part}
                twitter={twitter}
                gmail={gmail}
                facebook={facebook}
              />
            );
          }
        )}
      </ImageBox>
    </Container>
  );
};



export default OurTeams;
