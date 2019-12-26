import React from "react";
import logo from "./../../img/logo_transparent.png";
import styled from "styled-components";

const LogoImg = styled.img`
  width: 60px;
  height: 60px;
  transform: translateY(0%);
  cursor: pointer;
  filter: ${props =>
    props.inverted
      ? "invert(1)"
      : props.theme.type === "dark"
      ? "invert(1)"
      : "invert(0)"};
  transition: 0.5s;
  transition-delay: 0.5s;
  @media (max-width: 768px) {
    transform: translateY(30%);
  }
`;

function Logo({ inverted = false }) {
  return <LogoImg inverted={inverted} src={logo}></LogoImg>;
}

export default Logo;
