import React from "react";
import logo from "./../../img/logo_transparent.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
const LogoImg = styled.img`
  width: 60px;
  height: 60px;
  transform: translateY(0%);
  cursor: pointer;
  margin-left: ${(props) => (props.inverted ? "0px" : "15px")}
  filter: ${(props) =>
    props.inverted
      ? "invert(1)"
      : props.theme.type === "dark"
      ? "invert(1)"
      : "invert(0)"};
  transition: 0.5s;
  transition-delay: 0.5s;
  @media (max-width: 768px) {
    transform: translateY(30%);
    margin-left: 0px;
  }
`;

function Logo({ inverted = false }) {
  return (
    <Link
      to="/"
      style={{ height: "100%", display: "flex", alignItems: "center" }}
    >
      <LogoImg inverted={inverted} src={logo}></LogoImg>
    </Link>
  );
}

export default Logo;
