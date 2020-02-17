import React from "react";
import styled from "styled-components";
import ProjectTitle from "./ProjectTitle";
import ProjectImage from "./ProjectImage";
import { SubHeader } from "./../containers/Signature";
import { useSpring, animated, config } from "react-spring";
import PreloadInContainer from "./../containers/PreloadInContainer";
import Spinner from "./Spinner";
import ReactDOM from "react-dom";
import { useInView } from "react-intersection-observer";
import OverlayEffect from "./OverlayEffect";
import { useHistory } from "react-router-dom";
import LinkButton from "./LinkButton";
import TranslatedText from "./../containers/TranslatedText";
const ProjectLink = styled.a`
  width: 80%;
  margin: 0 auto;
  box-shadow: 0 20px 80px 0 rgba(0, 0, 0, 0.45);
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  height: 480px;
  position: relative;
  margin-bottom: 135px;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  padding: 45px;
  justify-content: flex-end;
  text-decoration: none;
  overflow: hidden;

  &::before {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    display: block;
    content: " ";
    background: #1c1d25;
    opacity: 0.6;
    transition: opacity 0.3s ease;
    z-index: 2;
  }
`;

function ProjectCase({ project, scroll }) {
  const history = useHistory();

  const [animateBack, setAnimateBack] = React.useState(false);
  const timerId = React.useRef();
  const [ref, inView, entry] = useInView({
    threshold: 0.1
  });

  const [mask, setMask] = useSpring(() => ({
    from: {
      width: "0%"
    },
    config: {
      ...config.default,
      tension: 200
    }
  }));
  const [showPreload, togglePreload] = React.useState(false);
  const [text, setText] = useSpring(() => ({
    from: {
      transform: `scale(1,1)`
    }
  }));
  const animate = () => {
    setMask({ width: "100%" });
    timerId.current = setTimeout(
      () => setText({ transform: `scale(1.08,1.08)` }),
      500
    );
  };
  const cancel = () => {
    if (timerId.current) {
      clearTimeout(timerId.current);
    }
    setMask({ width: "0%" });
    setText({ transform: `scale(1,1)` });
  };
  const scrollIntoView = () => {
    if (scroll) {
      scroll.current.scrollTo(0);
    }
  };
  const clicked = e => {
    e.preventDefault();
    scrollIntoView();
    setTimeout(() => {
      togglePreload(true);
    }, 700);
  };

  const callback = () => {
    setTimeout(() => history.push(`/work/${project.id}`), 200);
  };

  return showPreload ? (
    ReactDOM.createPortal(
      <div
        style={{
          position: "fixed",
          background: "transparent",
          top: 0,
          left: 0,
          overflow: "hidden",
          width: "100vw",
          height: "100vh",
          zIndex: 999999
        }}
      >
        <PreloadInContainer
          animateBack={animateBack}
          callback={callback}
          zIndex={999999}
        >
          <Spinner></Spinner>
        </PreloadInContainer>
      </div>,
      document.getElementById("modal-root")
    )
  ) : (
    <ProjectLink
      ref={ref}
      onMouseLeave={cancel}
      onMouseEnter={animate}
      onClick={clicked}
      href={`/work/${project.id}`}
    >
      {/* <OverlayEffect animate={inView}></OverlayEffect> */}
      <ProjectImage src={project.img}></ProjectImage>
      <animated.div
        style={{
          position: "relative",
          zIndex: 9999,
          ...text
        }}
      >
        <ProjectTitle>{project.title}</ProjectTitle>
        <TranslatedText
          trKey="shortdesc"
          options={{ subtitle: project.subtitle, shortDesc: project.shortDesc }}
        >
          {(text, rest) => (
            <SubHeader
              customSize="1.5rem"
              responsiveSize="1rem"
              customColor="#fff"
              {...rest}
            >
              {text}
            </SubHeader>
          )}
        </TranslatedText>
        <TranslatedText trKey="more">
          {(text, rest) => (
            <LinkButton {...rest} href={`/work/${project.id}`}>
              {text}
            </LinkButton>
          )}
        </TranslatedText>
      </animated.div>
      <animated.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          zIndex: 99,
          background: "#1b2e63",
          opacity: 0.5,
          ...mask
        }}
      ></animated.div>
    </ProjectLink>
  );
}

export default ProjectCase;
