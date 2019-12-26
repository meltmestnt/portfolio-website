import React from "react";
import styled from "styled-components";
import { animated, useTransition } from "react-spring";

function OverlayEffect({ duration = 800, animate = null }) {
  const [show, toggleShow] = React.useState(true);
  const transitions = useTransition(show, null, {
    from: { width: "100%" },
    config: { mass: 1, tension: 500, friction: 75 },
    enter: {
      width: "100%"
    },
    leave: {
      width: "0%"
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
        <animated.div
          key={key}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            background: " #fff",
            zIndex: 999999,
            ...props
          }}
        ></animated.div>
      )
  );
}

export default OverlayEffect;
