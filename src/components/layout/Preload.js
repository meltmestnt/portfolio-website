import React from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import { easePolyOut } from "d3-ease";
const FullscreenContainer = styled.div`
  width: 100%;
  background: ${props => props.color || "#1e272e"};
  height: 100%;
`;

const Fixed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
`;

function Preload({ children, off, ...rest }) {
  const [first, set] = useSpring(() => ({
    from: { width: "0vw" },

    to: { width: "100vw" },
    config: { friction: 60, tension: 400 }
  }));
  const second = useSpring({
    from: { width: "0vw", transform: "translateX(0%)" },
    to: { width: "100vw", transform: "translateX(100%)" },
    config: { friction: 60, tension: 300 },
    delay: 900
  });
  const third = useSpring({
    from: { width: "0vw", transform: "translateX(0%)" },
    to: { width: "100vw", transform: "translateX(100%)" },
    config: { friction: 60, tension: 300 },
    delay: 1000,

    onRest: () => off()
  });
  return (
    <Fixed>
      <animated.div style={{ height: "100%", ...first }}>
        <FullscreenContainer color="rgba(28, 29, 37, 1)">
          {children}
        </FullscreenContainer>
      </animated.div>
      <animated.div
        style={{
          zIndex: 9999,
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          ...second
        }}
      >
        <FullscreenContainer color="#1e3799">{children}</FullscreenContainer>
      </animated.div>
      <animated.div
        style={{
          zIndex: 9999,
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          ...third
        }}
      >
        <FullscreenContainer color="#ff4757">{children}</FullscreenContainer>
      </animated.div>
    </Fixed>
  );
}

export default Preload;
