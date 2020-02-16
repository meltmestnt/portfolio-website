import React from "react";
import styled from "styled-components";
import scrolling from "./../../../img/scrolling.svg";
import { useSpring, animated } from "react-spring";

const ScrollingIcon = styled.img`
  width: 35px;
  height: 45px;
  object-fit: cover;
  cursor: pointer;
  position: absolute;
  left: 50%;
  top: 0;
  transition: 1s cubic-bezier(0.63, -0.16, 0.05, 1.46);
  transform: translate(-50%, 0);
  &:hover {
    transform: translate(-50%, 7px);
  }
`;

function ScrollDown({ click }) {
  const clicked = () => {
    click();
  };
  return <ScrollingIcon onClick={clicked} src={scrolling}></ScrollingIcon>;
}

export default ScrollDown;
