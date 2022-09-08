import React from "react";
import Button from "../Button/Button";
import { Container, Content, Descrition, Title1, Title2 } from "./Hiro.styles";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const Hiro = () => {
  const navigate = useNavigate();

  const { inView, ref } = useInView({
    threshold: 1,
  });

  return (
    <Container ref={ref}>
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
        styles={{ fontWeight: "600", fontSize: "14px" }}
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
