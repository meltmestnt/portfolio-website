import React from "react";
import styled from "styled-components";

const Description = styled.p`
  font-size: 1.4rem;
  font-family: "Libre Baskerville", sans-serif !important;
  font-weight: 400;
  margin: 10px 0px;
  text-align: left;
  @media (max-width: 575.98px) {
    font-size: 0.9rem;
  }
`;
function ModalDescription({ children }) {
  return <Description>{children}</Description>;
}

export default ModalDescription;
