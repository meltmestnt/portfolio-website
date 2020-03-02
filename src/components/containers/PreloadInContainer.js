import React from "react";
import { useTransition, useSpring, animated, config } from "react-spring";
import styled from "styled-components";

const FullscreenContainer = styled.div`
  width: 100%;
  background: ${props => props.color || "#1e272e"};
  height: 100%;
`;

function PreloadInContainer({
  children,
  zIndex,
  callback,
  animateBack = null
}) {
  const [first, set] = useSpring(() => ({
    from: { width: "0%" },

    to: { width: "100%" },
    config: { friction: 60, tension: 400 }
  }));
  const second = useSpring({
    from: { width: "0%", transform: "translateX(0%)" },
    to: { width: "100%", transform: "translateX(100%)" },
    config: { friction: 60, tension: 300 },
    delay: 900
  });
  const third = useSpring({
    from: { width: "0%", transform: "translateX(0%)" },
    to: { width: "100%", transform: "translateX(100%)" },
    config: { friction: 60, tension: 300 },
    delay: 1000,

    onRest: () => {
      setSpinner({ opacity: 1 });
      if (callback) callback();
    }
  });
  const [spinner, setSpinner] = useSpring(() => ({
    from: {
      opacity: 0
    }
  }));
  React.useEffect(() => {
    if (animateBack) {
      setSpinner({ opacity: 0 });
      set({
        width: "0%"
      });
    } else {
      set({
        width: "100%"
      });
    }
  }, [animateBack, set]);
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: zIndex || 9999
      }}
    >
      <animated.div style={{ height: "100%", ...first }}>
        <FullscreenContainer color="rgba(28, 29, 37, 1)">
          <animated.div style={spinner}>{children}</animated.div>
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
        <FullscreenContainer color="#1e3799"></FullscreenContainer>
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
        <FullscreenContainer color="#ff4757"></FullscreenContainer>
      </animated.div>
    </div>
  );
}

export default PreloadInContainer;
