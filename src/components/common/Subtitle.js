import React from "react";
import styled from "styled-components";

const Sub = styled.h3`
  font-family: "Libre Baskerville", sans-serif !important;
  color: #b19386;
  font-size: ${props => (props.fontSize ? props.fontSize : "1.5rem")};
  margin: ${props => (props.margin ? props.margin : "25px 0px")};
  text-transform: uppercase;
`;

function Subtitle({ children, fontSize, margin }) {
  return (
    <Sub margin={margin} fontSize={fontSize}>
      {children}
    </Sub>
  );
}

export default Subtitle;
