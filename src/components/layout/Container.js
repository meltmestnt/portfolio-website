import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: ${props => (props.fluid ? "100%" : "1240px")};
  margin-right: auto;
  height: auto;
  margin-left: auto;
`;

function Container({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
}

export default Container;
