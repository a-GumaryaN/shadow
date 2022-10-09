import React, { FC, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Container, Description, Icon, Number, Wrapper } from "./TextCard2.styles";

const TextCard2: FC<{
  icon: string;
  number: number;
  description: string;
}> = ({ icon, number, description }) => {
  const { inView, ref } = useInView();

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    inView &&
      setTimeout(() => {
        counter < number && setCounter(counter + 5);
      }, 40);
  }, [inView, counter]);

  return (
    <Container ref={ref}>
      <Icon className={`fa ${icon}`} />
      <Wrapper>
        <Number>{counter}</Number>
        <Description>{description}</Description>
      </Wrapper>
    </Container>
  );
};

export default TextCard2;
