import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

function ProjectImage({ src }) {
  return <Img src={src}></Img>;
}

export default ProjectImage;
