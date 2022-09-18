import React from "react";
import { Title } from "../ContactUs/ContactUs.styles";
import ourTeams from "../../constants/data/ourTeam.data";
import ImageCard from "../../components/ImageCard/ImageCard";
import styled from "styled-components";

const OurTeams = () => {
  return (
    <Container>
      <Title>meet the team</Title>
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

const Container = styled.div`
background-color: white;
  width: 100%;
  padding: 150px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 687px) {
    flex-direction: column;
  }
`;

export default OurTeams;
