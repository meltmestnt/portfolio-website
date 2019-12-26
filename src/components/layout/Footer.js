import React from "react";
import Container from "./Container";
import Logo from "./../common/Logo";
import FooterLinks from "../common/FooterLinks.js";
import FooterRights from "./../common/FooterRights";
import CVLink from "./../common/CVLink";
function Footer(props) {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "50px 0px",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Logo inverted></Logo>
        <FooterLinks></FooterLinks>
        <FooterRights></FooterRights>
        <CVLink></CVLink>
      </div>
    </Container>
  );
}

export default Footer;
