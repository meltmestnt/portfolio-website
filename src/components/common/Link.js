import React from "react";
import styled from "styled-components";
import { useTransition, animated, config } from "react-spring";
const LinkHover = styled.a`
  text-decoration: none;
  font-size: 1.3rem;
  position: relative;
  cursor: pointer;
  font-weight: 700;
  color: ${props => (props.color ? props.color : props.theme.color)};
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 10px 5px;
  line-height: 1rem;
`;

export const LinkWrapper = styled.span`
  position: relative;
  cursor: pointer;
  display: flex;
  flex-basis: auto;
  justify-content: center;
  text-align: center;
  align-items: ${props => (props.noMargin ? "center" : "flex-end")};
  height: auto;
  overflow: hidden;
  margin: ${props =>
    props.noMargin ? "0 10px" : props.margin ? props.margin : "10px 10px"};
  margin-bottom: 0px;
`;

function Link({
  children,
  click = null,
  href = "#",
  color,
  noMargin,
  margin,
  padding
}) {
  const [underline, toggleUnderline] = React.useState(null);
  let id = React.useRef();
  const transitions = useTransition(underline, null, {
    config: config.wobbly,
    from: {
      width: "0%",
      left: 0,
      transform: "translateX(0%)"
    },
    enter: {
      left: 0,
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
      margin={margin}
      padding={padding}
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
              key={key}
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
              key={key}
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
