import React, { FC } from "react";
import { ParalaxImage } from "./Paralax.styled";

const Paralax: FC<{ image: any }> = ({ image }) => {
  return <ParalaxImage image={`url(${image})`} />;
};

export default Paralax;
