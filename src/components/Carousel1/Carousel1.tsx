import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";

const Carousel1: FC<{
  contents: {
    id: number;
    description: string;
    title: string;
    subtitle: string;
  }[];
}> = ({ contents }) => {
  const [slideNumber, setSlideNumber] = useState(1);

  useEffect(() => {
    const sliderTimer = setTimeout(() => {
      slideNumber < contents.length && setSlideNumber(slideNumber + 1);
      slideNumber >= contents.length && setSlideNumber(1);
    }, 5000);
    return () => clearTimeout(sliderTimer);
  }, [slideNumber]);

  return (
    <Container>
      <SlideConainer
        contentsNumbers={contents.length}
        slideNumber={slideNumber}
      >
        {contents.map(({id, description, title, subtitle }) => {
          return (
            <Slide key={id}>
              <Description>{description}</Description>
              <Title>{title}</Title>
              <Subtitle>{subtitle}</Subtitle>
            </Slide>
          );
        })}
      </SlideConainer>
      <Dots>
        {contents.map(({ id }) => {
          return (
            <Dot
            key={id}
              onClick={() => {
                setSlideNumber(id);
              }}
              isActive={id === slideNumber}
            ></Dot>
          );
        })}
      </Dots>
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  overflow: hidden;
`;

const SlideConainer = styled.div<{
  contentsNumbers: number;
  slideNumber: number;
}>`
  width: ${({ contentsNumbers }) => contentsNumbers * 100 + "%"};
  position: relative;
  right: ${({ slideNumber }) => (slideNumber - 1) * 100 + "%"};
  display: flex;
  overflow: hidden;
  margin-bottom: 40px;
  transition: all 1s ease;
`;

const Slide = styled.div``;

const Description = styled.p`
  color: white;
  margin-bottom: 30px;
  line-height: 30px;
  letter-spacing: 1px;
`;

const Title = styled.h4`
  color: white;
  font-weight: 400;
  margin-bottom: 15px;
  letter-spacing: 2px;
`;

const Subtitle = styled.p`
  color: white;
  margin-bottom: 10px;
  font-weight: 200;
  font-size: 13px;
  letter-spacing: 3px;
  color: #999;
`;

const Dots = styled.div`
  display: flex;
  align-items: center;
`;

const Dot = styled.div<{ isActive: boolean }>`
  width: 15px;
  height: 15px;
  border-radius: 30px;
  border: 1px solid white;
  background-color: ${({ isActive }) => (isActive ? "white" : 0)};
  margin-right: 20px;
`;

export default Carousel1;
