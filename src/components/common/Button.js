import React from "react";
import styled, { withTheme } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { useSpring, animated, config } from "react-spring";
const CoolButton = styled.button`
  background: linear-gradient(270deg, #f06449, #ef3636);
  color: #fff;
  outline: none;
  border: none;
  padding: 20px 30px;
  display: inline-block;
  font-size: 0.97rem;
  font-weight: 700;
  overflow: hidden;
  position: relative;
  top: 0;
  left: 0;
  z-index: 9999;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${props => props.disabled && 0.6};
`;

function Button({ children, theme, disabled = false, click = null }) {
  const [arrow, set] = useSpring(() => ({
    from: { transform: `translate(50%, -50%)` },
    config: config.wobbly
  }));
  const [buttonMask, setMask] = useSpring(() => ({
    from: {
      width: "0%",
      transform: "translateX(0%)"
    },
    config: config.wobbly
  }));
  const animateHover = () => {
    set({
      transform: `translate(100%, -50%)`
    });
    setMask({
      width: "100%",
      transform: "translateX(100%)"
    });
  };
  const animateLeave = () => {
    set({
      transform: `translate(50%, -50%)`
    });
    setMask({
      width: "100%",
      transform: "translateX(-100%)"
    });
  };
  return (
    <div
      style={{
        display: "flex",
        margin: "10px 10px",
        position: "relative"
      }}
    >
      <div
        style={{
          display: "inline-block",
          position: "relative"
        }}
      >
        <CoolButton
          onMouseLeave={animateLeave}
          disabled={disabled}
          onClick={() => {
            if (!disabled && click) click();
          }}
          onMouseEnter={animateHover}
        >
          {children}
          <div
            style={{
              width: "100%",
              height: "100%",
              overflow: "hidden",
              position: "absolute",
              top: 0,
              left: 0
            }}
          >
            <animated.div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                background: "#1b2e63",
                ...buttonMask
              }}
            ></animated.div>
          </div>
        </CoolButton>
        <animated.div
          style={{
            color: `${theme.type === "dark" ? "white" : theme.color}`,
            fontSize: "1.8rem",
            position: "absolute",
            top: "50%",
            right: 0,
            display: "flex",
            zIndex: 99999,
            alignItems: "center",
            transform: "translate(50%, -50%)",
            ...arrow
          }}
        >
          <FontAwesomeIcon icon={faLongArrowAltRight}></FontAwesomeIcon>
        </animated.div>
      </div>
    </div>
  );
}

export default withTheme(Button);
