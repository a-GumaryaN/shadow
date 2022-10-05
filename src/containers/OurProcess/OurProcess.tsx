import React from "react";
import styled from "styled-components";
import PureTitle from "../../components/PureTitle/PureTitle";
import TextCard3 from "../../components/TextCard3/TextCard3";
import { ourProcess } from "../../constants/data";

const OurProcess = () => {
  return (
    <Container>
      <div className="wrapped">
        <Title>OUR PROCESS</Title>
        <CardWrapper>
          {ourProcess.map(({ id, icon, title, description }) => {
            return (
              <TextCard3
                key={id}
                id={id}
                icon={icon}
                title={title}
                description={description}
              />
            );
          })}
        </CardWrapper>
      </div>
    </Container>
  );
};

const Container = styled.section`
  padding: 100px 10px;
`;

const Title = styled(PureTitle)`
  margin-bottom: 30px;
`;

const CardWrapper = styled.div`
display: grid;
grid-template-columns: auto;
justify-content: space-around;
gap: 30px;


@media only screen and (min-width:687px) {
  grid-template-columns: auto auto;
}

@media only screen and (min-width:992px) {
  grid-template-columns: auto auto auto auto;
}

`;

export default OurProcess;
