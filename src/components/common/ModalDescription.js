import React from "react";
import styled from "styled-components";

const Description = styled.p`
  font-size: 1.4rem;
  font-family: "Libre Baskerville", sans-serif !important;
  font-weight: 400;
  margin: 10px 0px;
  text-align: left;
  color: ${props => (props.themed ? props.theme.color : "black")};
  @media (max-width: 768px) {
    font-size: 0.9rem;
    text-align: center;
  }
`;
function ModalDescription({ children, themed = false }) {
  return <Description themed={themed}>{children}</Description>;
}

export default ModalDescription;
