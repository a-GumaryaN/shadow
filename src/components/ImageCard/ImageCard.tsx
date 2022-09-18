import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

export const Container = styled.div`
background-color: white;
  width: 22vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  &:hover& > img {
    transform: scale(1.05);
    opacity: 0.8;
  }
  @media only screen and (max-width: 687px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-out;
  margin-bottom: 30px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  color: black;
  margin-bottom: 10px;
`;

const Part = styled.h3`
  color: #666666;
  font-weight: 300;
  margin-bottom: 25px;
`;

const SocialMedias = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;

  & > li {
    margin: 0 10px;
  }
`;

const Icon = styled.i`
  &:hover {
    color: #858585;
  }
`;

export default ImageCard;
