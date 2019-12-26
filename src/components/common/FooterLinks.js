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
  padding: 0px 15px;
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
        <Link padding="0px" margin="10px 15px" href={l.link}>
          {l.title}
        </Link>
      ))}
    </Wrapper>
  );
}

export default SocialLinks;
