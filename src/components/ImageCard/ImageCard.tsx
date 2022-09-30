import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  Container,
  Contents,
  Icon,
  Part,
  SocialMedias,
  Title,
  Image,
} from "./ImageCard.styles";

const ImageCard: FC<{
  firstName: string;
  lastName: string;
  part: string;
  image: string;
  gmail: string;
  twitter: string;
  facebook: string;
}> = ({ image, firstName, lastName, part, gmail, twitter, facebook }) => {
  return (
    <Container>
      <Image src={image} alt="our team person" />
      <Contents>
        <Title>
          {firstName} {lastName}
        </Title>
        <Part>-{part}-</Part>
        <SocialMedias>
          <li>
            <Link to="">
              <Icon className="fa fa-facebook"></Icon>
            </Link>
          </li>
          <li>
            <Link to="">
              <Icon className="fa fa-twitter"></Icon>
            </Link>
          </li>
          <li>
            <Link to="">
              <Icon className="fa fa-google-plus"></Icon>
            </Link>
          </li>
        </SocialMedias>
      </Contents>
    </Container>
  );
};

export default ImageCard;
