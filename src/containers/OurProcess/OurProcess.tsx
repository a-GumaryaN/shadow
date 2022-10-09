import React from "react";
import TextCard3 from "../../components/TextCard3/TextCard3";
import { ourProcess } from "../../constants/data";
import { CardWrapper, Container, Title } from "./OurProcess.styles";

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

export default OurProcess;
