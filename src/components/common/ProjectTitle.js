import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  color: ${props =>
    props.color ? props.color : props.themed ? props.theme.color : "#fff"};
  font-size: ${props => props.fontSize || "2.8rem"};
  margin: 10px;
  position: relative;
  z-index: 9999;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

function ProjectTitle({ children, fontSize, color, themed = false }) {
  return (
    <Title themed={themed} color={color} fontSize={fontSize}>
      {children}
    </Title>
  );
}

export default ProjectTitle;
