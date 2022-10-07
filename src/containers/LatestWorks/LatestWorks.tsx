import React, { FC } from "react";
import PureBotton from "../../components/PureBotton/PureBotton";
import { Buttons, Container } from "./LatestWorks.styles";
import PureTitle from "../../components/PureTitle/PureTitle";
import Content from "../../components/Content/Content";
import { useNavigate } from "react-router-dom";
import Gallery from "../../components/Gallery/Gallery";
import styled from "styled-components";

const LatestWorks: FC<{}> = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <Title>latest work</Title>
        <Buttons>
          <PureBotton onClick={() => navigate("photo")}>Photo</PureBotton>
          <PureBotton className="black" onClick={() => navigate("graphic")}>
            Graphic
          </PureBotton>
          <PureBotton className="black" onClick={() => navigate("web")}>
            Web
          </PureBotton>
        </Buttons>
        <Gallery />
      </Content>
    </Container>
  );
};

const Title = styled(PureTitle)`
  padding: 80px 0;
  margin-bottom: 100px;
`;

export default LatestWorks;
