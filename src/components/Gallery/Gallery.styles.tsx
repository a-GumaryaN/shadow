import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  & > img {
    width: 90%;
    height: auto;
    margin: 10px 0;
  }

  @media only screen and (min-width: 687px) {
    width: 80vw;
    height: 40vw;
    display: grid;
    gap: 5px;
    grid-template-areas:
      "firstImage seccondImage thirdImage thirdImage"
      "fourthImage seccondImage fivethImage sixthImage";
    & > img {
      width: 20vw;
      height: auto;
      margin: 0;
    }
    & > .image1 {
      grid-area: firstImage;
    }
    & > .image2 {
      grid-area: seccondImage;
    }
    & > .image3 {
      width: 40vw;
      grid-area: thirdImage;
    }
    & > .image4 {
      grid-area: fourthImage;
    }
    & > .image5 {
      grid-area: fivethImage;
    }
    & > .image6 {
      grid-area: sixthImage;
    }
  }
`;
