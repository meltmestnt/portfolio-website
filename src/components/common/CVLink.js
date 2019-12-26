import React from "react";
import styled from "styled-components";

const Link = styled.a`
  color: ${props =>
    props.color ? props.color : props.themed ? props.theme.color : "#fff"};
  text-decoration: none;
  font-size: 0.875rem;
  position: relative;

  &::after {
    position: absolute;
    bottom: -25%;
    opacity: 0.5;
    height: 50%;
    width: 100%;
    left: 0;
    transition: 0.3s;
    content: "";
    background: #ff5e57;
  }
  &:hover {
    &::after {
      bottom: -5%;
    }
  }
`;

function CVLink({
  color,
  themed = false,
  text = "My CV",
  href = "https://www.dropbox.com/s/p3bdsdkca2uiogv/Denis%27s%20Resume%20%281%29.pdf?dl=0"
}) {
  return (
    <Link themed={themed} color={color} href={href}>
      {text}
    </Link>
  );
}

export default CVLink;
