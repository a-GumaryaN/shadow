import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Container, Description, Dot, Dots, Slide, SlideConainer, Subtitle, Title } from "./Carousel1.styles";

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



export default Carousel1;
