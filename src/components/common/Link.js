import React from "react";
import styled from "styled-components";
import { useTransition, animated, config } from "react-spring";
const LinkHover = styled.a`
  text-decoration: none;
  font-size: 1.3rem;
  position: relative;
  cursor: pointer;
  color: ${props => (props.color ? props.color : props.theme.color)};
  transition: 0.5s;
`;

const LinkWrapper = styled.span`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: ${props => (props.noMargin ? "center" : "flex-end")};
  height: ${props => (props.noMargin ? "100%" : "auto")};
  padding: ${props => (props.noMargin ? "0px" : "10px 5px")};
  overflow: hidden;
  margin: ${props => (props.noMargin ? "0 10px" : "10px 10px")};
  margin-bottom: 0px;
`;

function Link({ children, click = null, href = "#", color, noMargin }) {
  const [underline, toggleUnderline] = React.useState(null);
  let id = React.useRef();
  const transitions = useTransition(underline, null, {
    config: config.wobbly,
    from: {
      width: "0%",
      transform: "translateX(0%)"
    },
    enter: {
      width: "100%"
    },
    leave: {
      transform: "translateX(110%)",
      right: 0
    }
  });
  return (
    <LinkWrapper
      noMargin={noMargin}
      onClick={click || null}
      onMouseLeave={() => {
        if (underline === null || !underline) return;
        toggleUnderline(false);
        id.current = setTimeout(() => toggleUnderline(null), 400);
      }}
      onMouseEnter={e => {
        if (underline) return;
        if (id.current) clearTimeout(id.current);
        e.stopPropagation();
        e.preventDefault();
        toggleUnderline(true);
      }}
    >
      <LinkHover color={color} href={href}>
        {children}
      </LinkHover>
      {transitions.map(({ key, props, item }) =>
        item !== null ? (
          item ? (
            <animated.div
              style={{
                position: "absolute",
                bottom: 0,
                width: "0%",

                height: 2,
                background: "#ff4757",
                ...props
              }}
            ></animated.div>
          ) : (
            <animated.div
              style={{
                position: "absolute",
                bottom: 0,
                width: "0%",

                height: 2,
                background: "#3742fa",
                ...props
              }}
            ></animated.div>
          )
        ) : null
      )}
    </LinkWrapper>
  );
}

export default Link;
