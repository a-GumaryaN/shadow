import React from "react";
import styled from "styled-components";
import { worksCounter } from "../../constants/data";
import TextCard2 from "../TextCard2/TextCard2";
import { banners } from "../../constants/images";

const WorksCounter = () => {
  return (
    <Container image={banners.banner2} className="paralax">
      <Wrapper>
        {worksCounter.map(({ id, icon, description, number }) => {
          return (
            <TextCard2
              key={id}
              icon={icon}
              description={description}
              number={number}
            />
          );
        })}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div<{ image: string }>`
  background-image: ${({ image }) => `url(${image})`};
  padding: 100px;
`;

const Wrapper = styled.div`
  max-width: 1000px;
  justify-content: space-around;
  display: grid;

  gap: 40px;

  grid-template-columns: auto;
  
  @media only screen and (min-width:687px) {
      grid-template-columns: auto auto;
      
  }
  
  @media only screen and (min-width:992px) {
      grid-template-columns: auto auto auto auto;
      
  }



`;

export default WorksCounter;
