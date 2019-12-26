import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Link = styled.a`
  text-decoration: none;
  color: ${props => props.color || "#fff"};
  margin: 10px 0px;
`;

function LinkButton({ children, href }) {
  return (
    <Link href={href}>
      <Button>{children}</Button>
    </Link>
  );
}

export default LinkButton;
