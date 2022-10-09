import React, { FC } from "react";
import PureButton from "../PureBotton/PureBotton";
import { Button, Container, Content, Descrition, Title1, Title2 } from "./Hiro1.styles";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const Hiro: FC<{ image: string }> = ({ image }) => {
  const navigate = useNavigate();
  const { inView, ref } = useInView({
    threshold: 0.7,
  });

  return (
    <Container image={image} className="paralax" ref={ref}>
      <Content>
        <Title1>HELLO!</Title1>
        <Title2>
          WE AER SHA
          <div
            style={{
              right: inView ? "0" : " 30px",
              opacity: inView ? "1" : "0.3",
            }}
          >
            DOW
          </div>
        </Title2>
        <Descrition>Creative Digital Media</Descrition>
      </Content>
      <Button
        onClick={() => {
          navigate("#", { replace: true });
        }}
        className="black"
      >
        HIRE US NOW
      </Button>
    </Container>
  );
};

export default Hiro;
