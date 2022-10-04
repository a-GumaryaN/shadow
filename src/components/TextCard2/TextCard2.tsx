import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

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

const Container = styled.div`
  display: flex;
`;

const Icon = styled.i`
  color: white;
  font-size: 27px;
  margin-right: 20px;
  margin-top: 6px;
`;

const Wrapper = styled.div``;

const Number = styled.h4`
  color: white;
  font-size: 50px;
  font-weight: 400;
  letter-spacing: 2px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  color: white;
  max-width: 30px;
  letter-spacing: 2px;
`;

export default TextCard2;
