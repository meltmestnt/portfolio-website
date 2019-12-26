import React from "react";
import styled from "styled-components";
import { animated, useTransition, config } from "react-spring";

function OverlayEffect({ duration = 100, animate = null }) {
  const [show, toggleShow] = React.useState(true);
  const transitions = useTransition(show, null, {
    from: { width: "100%", right: 0 },
    config: config.slow,
    enter: {
      width: "100%",
      transform: `translateX(0%)`,
      right: 0
    },
    leave: {
      width: "0%",
      right: 0,
      transform: `translateX(100%)`
    }
  });

  React.useEffect(() => {
    if (animate === true) toggleShow(false);
  }, [animate]);
  React.useEffect(() => {
    let id;
    if (animate === null) {
      id = setTimeout(() => toggleShow(false), duration);
    }

    return () => clearTimeout(id);
  }, []);

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <div
          style={{
            position: "absolute",
            overflow: "hidden",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0
          }}
        >
          <animated.div
            key={key}
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              height: "100%",
              background: " #fff",
              zIndex: 999999,
              ...props
            }}
          ></animated.div>
        </div>
      )
  );
}

export default OverlayEffect;
