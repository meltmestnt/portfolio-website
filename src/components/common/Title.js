import React from "react";
import styled from "styled-components";

const H = styled.h2`
  color: ${props => props.theme.color};
  font-size: 2.5rem;
  margin: 25px 0px;
`;

function Title({ children }) {
  return <H>{children}</H>;
}

export default Title;
