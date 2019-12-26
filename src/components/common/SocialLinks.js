import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import links from "./../links";

const Wrapper = styled.div`
  position: absolute;
  height: 100vh;
  top: ${props => (props.direction === "row" ? "90%" : "0%")};
  right: ${props => (props.direction === "row" ? "60%" : "8px")};
  z-index: 999;
  display: flex;
  flex-direction: ${props => props.direction || "column"};
  justify-content: center;
  @media (max-width: 768px) {
    display: ${props => !props.enable && "none"};
  }
`;

const SocialLink = styled.a`
  font-size: 1.4rem;
  margin: 10px 10px;
  cursor: pointer;
  color: ${props => props.theme.color};
`;

function SocialLinks({ direction, enable = false }) {
  return (
    <Wrapper enable={enable} direction={direction}>
      {links.map(l => (
        <SocialLink href={l.link}>
          <FontAwesomeIcon icon={l.icon}></FontAwesomeIcon>
        </SocialLink>
      ))}
    </Wrapper>
  );
}

export default SocialLinks;
