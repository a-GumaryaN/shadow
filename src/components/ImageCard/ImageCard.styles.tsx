import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
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

export const Image = styled.img`
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-out;
  margin-bottom: 30px;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h3`
  color: black;
  margin-bottom: 10px;
`;

export const Part = styled.h3`
  color: #666666;
  font-weight: 300;
  margin-bottom: 25px;
`;

export const SocialMedias = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;

  & > li {
    margin: 0 10px;
  }
`;

export const Icon = styled.i`
  &:hover {
    color: #858585;
  }
`;