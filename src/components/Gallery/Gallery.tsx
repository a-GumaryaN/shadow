import React from "react";
import { gallery } from "../../constants/images";
import { Container } from "./Gallery.styles";

const Gallery = () => {
  let imageKey = 0;

  return (
    <Container>
      {gallery.map((item) => {
        imageKey++;
        return <img key={imageKey} className={`image${imageKey}`} src={item} />;
      })}
    </Container>
  );
};

export default Gallery;
