import React from "react";
import styled from "styled-components";

const Sub = styled.h3`
  font-family: "Libre Baskerville", sans-serif !important;
  color: #b19386;
  font-size: 1.5rem;
  margin: 25px 0px;
  text-transform: uppercase;
`;

function Subtitle({ children }) {
  return <Sub>{children}</Sub>;
}

export default Subtitle;
