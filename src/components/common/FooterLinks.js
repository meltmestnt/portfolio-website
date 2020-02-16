import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "./Link";

import links from "./../links";

const Wrapper = styled.div`
  z-index: 99999;
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 35px;
  width: 50%;
  padding: 0px 10px 25px 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const LinkContainerFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const SocialLink = styled.a`
  font-size: 1.4rem;
  margin: 10px 0px;
  cursor: pointer;
  color: #fff;
  margin: 10px 20px;
`;

function SocialLinks() {
  return (
    <Wrapper>
      {links.map(l => (
        <LinkContainerFlex>
          <Link padding="0px" key={l.title} margin="10px 0px" href={l.link}>
            {l.title}
          </Link>
        </LinkContainerFlex>
      ))}
    </Wrapper>
  );
}

export default SocialLinks;
