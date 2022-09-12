import React, { FC } from "react";
import { Container } from "./AnimatedImage.styles";

const AnimatedImage: FC<{ image: string; alt?: string }> = ({
  image,
  alt = "image",
}) => {
  return (
    <Container>
      <img src={alt} alt="image" />
      <div>
        <h3></h3>
        <p></p>
      </div>
    </Container>
  );
};

export default AnimatedImage;
