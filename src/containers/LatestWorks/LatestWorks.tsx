import React, { FC } from "react";
import Button from "../../components/Button/Button";
import { Buttons, Container } from "./LatestWorks.styles";
import Title from "../../components/Title/Title";
import Content from "../../components/Content/Content";
import { useNavigate } from "react-router-dom";
import Gallery from "../../components/Gallery/Gallery";

const LatestWorks: FC<{}> = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <Title styles={{ padding: "80px 0", marginBottom: "100px" }}>
          latest work
        </Title>
        <Buttons>
          <Button onClick={() => navigate("photo")}>Photo</Button>
          <Button className="black" onClick={() => navigate("graphic")}>
            Graphic
          </Button>
          <Button className="black" onClick={() => navigate("web")}>
            Web
          </Button>
        </Buttons>
        <Gallery />
      </Content>
    </Container>
  );
};

export default LatestWorks;
