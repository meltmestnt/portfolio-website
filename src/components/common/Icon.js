import React from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";

const I = styled.a`
  color: ${props => props.defaultColor || "black"};
  text-decoration: none;
  position: relative;
  transition: 0.5s;
  width: 64px;
  display: flex;
  justify-content: center;
  height: 64px;
  font-size: 4rem;
  margin: 15px;
  &:hover {
    color: ${props => props.color || "#1c1d25"} !important;
  }
`;

const Title = styled.h5`
  font-size: 0.9rem;
  color: ${props => props.defaultColor || "#1c1d25"};
  font-weight: 700;
`;

function Icon({ children, title, color, defaultColor }) {
  const [hover, set] = useSpring(() => ({
    from: {
      transform: "translate(-50%, 300%)",
      opacity: 0
    }
  }));
  const animate = () => set({ opacity: 1, transform: "translate(-50%, 200%)" });
  const undo = () =>
    set({
      transform: "translate(-50%, 300%)",
      opacity: 0
    });
  return (
    <I
      color={color}
      defaultColor={defaultColor}
      onMouseEnter={animate}
      onMouseLeave={undo}
    >
      {children}
      <animated.div
        style={{
          position: "absolute",
          bottom: 0,
          opacity: 1,
          left: "50%",
          transform: `translate(-50%, 200%)`,
          width: "100%",
          textAlign: " center",
          ...hover
        }}
      >
        <Title defaultColor={defaultColor}>{title}</Title>
      </animated.div>
    </I>
  );
}

export default Icon;
