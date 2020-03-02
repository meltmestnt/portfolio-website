import React from "react";
import styled from "styled-components";
import scrolling from "./../../../img/scrolling.svg";
import { useSpring, animated } from "react-spring";

/* const ScrollingIcon = styled.img`
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
`; */
const ArrowContainer = styled.div`
  height: 95px;
  width: 100px;

  overflow: hidden;
  transition: 0.25s ease-out;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: center;
  cursor: pointer;
  &:hover {
    span {
      height: 45px;
      transition: 0.25s ease-out;
      width: 2px;
      position: relative;
      background: ${props => props.theme.color};
      &::before {
        transform: rotate(135deg);
        transition: 0.35s ease-out;
        height: 2px;
        bottom: 5px;
        background: ${props => props.theme.color};
        left: -1px;
      }
      &::after {
        height: 2px;
        bottom: 5px;
        transition: 0.35s ease-out;
        transform: rotate(45deg);
        right: -1px;
        background: ${props => props.theme.color};
      }
    }
  }
`;
const ArrowDown = styled.span`
  position: relative;
  height: 95px;
  width: 1px;
  background: ${props => (props.theme.type === "dark" ? "#fff" : "#000")};
  display: block;
  transition: 0.25s ease-out;
  &::after,
  &::before {
    content: "";
    transition: 0.35s ease-out;
    position: absolute;
    bottom: 0px;
    width: 15px;
    height: 1px;
    background: black;
  }
  &::before {
    left: -7px;
    transform: rotate(90deg);
  }
  &::after {
    right: -7px;
    transform: rotate(90deg);
  }
`;

function ScrollDown({ click }) {
  const clicked = () => {
    click();
  };

  /* <ScrollingIcon onClick={clicked} src={scrolling}></ScrollingIcon> */

  return (
    <ArrowContainer onClick={clicked}>
      <ArrowDown></ArrowDown>
    </ArrowContainer>
  );
}

export default ScrollDown;
