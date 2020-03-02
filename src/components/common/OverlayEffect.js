import React from "react";
import styled, { withTheme } from "styled-components";
import { animated, useTransition, config } from "react-spring";
function OverlayEffect({
  duration = 100,
  animate = null,
  disabled = null,
  delay = 0,
  theme,
  disableOverlay,
  color = "#fff"
}) {
  const [show, toggleShow] = React.useState(disabled ? false : true);
  const transitions = useTransition(show, null, {
    from:
      disabled === null
        ? { width: "100%", right: 0 }
        : { width: "0%", left: 0 },
    config: disabled === null ? config.slow : config.stiff,
    enter:
      disabled === null
        ? {
            width: "100%",
            transform: `translateX(0%)`,
            right: 0
          }
        : {
            width: "100%",
            transform: `translateX(0%)`,
            left: 0
          },
    leave:
      disabled === null
        ? {
            width: "0%",
            right: 0,
            transform: `translateX(100%)`
          }
        : {
            left: 0,
            transform: `translateX(100%)`
          }
  });
  React.useEffect(() => {
    if (disabled === true) toggleShow(false);
    else if (disabled === false)
      setTimeout(() => {
        if (disableOverlay.current) return;
        toggleShow(true);
      }, delay);
  }, [disabled, delay, disableOverlay]);
  React.useEffect(() => {
    if (animate === true) toggleShow(false);
  }, [animate]);
  React.useEffect(() => {
    let id;
    if (animate === null && disabled === null) {
      id = setTimeout(() => toggleShow(false), duration);
    }

    return () => clearTimeout(id);
  }, []);
  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <div
          key={key}
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
              background: color,
              zIndex: 999999,
              opacity: 1,
              ...props
            }}
          ></animated.div>
        </div>
      )
  );
}

export default withTheme(OverlayEffect);
