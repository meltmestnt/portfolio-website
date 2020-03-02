import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 2.2rem;
  line-height: 1.3260254597;
  margin: 10px 0px;
  text-align: left;
`;

function ModalTitle({ children }) {
  return <Title>{children}</Title>;
}

export default ModalTitle;
