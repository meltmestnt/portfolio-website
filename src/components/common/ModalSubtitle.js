import React from "react";
import styled from "styled-components";

const Sub = styled.p`
  font-size: 0.99rem;
  font-family: "Libre Baskerville", sans-serif !important;
  font-weight: 400;
  text-align: left;
  margin: 10px 0px;
`;

function ModalSubtitle({ children }) {
  return <Sub>{children}</Sub>;
}

export default ModalSubtitle;
