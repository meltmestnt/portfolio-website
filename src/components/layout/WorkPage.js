import React from "react";
import Container from "./Container";
import TakeBackButton from "./../common/TakeBackButton";
import Nav from "./Nav";
import { withTheme } from "styled-components";
import SocialLinks from "./../common/SocialLinks";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import projects from "./../projects";
import { useParams } from "react-router-dom";
import ProjectImage from "./../common/ProjectImage";
import ProjectTitle from "./../common/ProjectTitle";
import styled from "styled-components";
import { animated, config, useTransition } from "react-spring";
import MenuOverlay from "./../containers/MenuOverlay";

const ImageWrapper = styled.div`
  width: 50%;
  margin: 0px auto;
  box-shadow: 0 20px 80px 0 rgba(0, 0, 0, 0.45);
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  height: 480px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.5;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`;

function WorkPage({ changeTheme, theme, togglePreload }) {
  const { id } = useParams();
  let parallax = React.useRef();
  const [showContent, toggleContent] = React.useState(false);
  const transitions = useTransition(showContent, null, {
    delay: 800,
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    }
  });
  React.useEffect(() => {
    if (id) {
      console.log("content show");
      setTimeout(() => toggleContent(true), 650);
    }
  });
  const [project, changeProject] = React.useState(
    projects.find(p => p.id === id)
  );
  const [showMenu, toggleMenu] = React.useState(false);
  return transitions.map(({ item, key, props }) =>
    item ? (
      <animated.div
        style={{
          background: theme.background || "#fff",
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          ...props
        }}
        key={key}
      >
        <Parallax
          ref={ref => (parallax.current = ref)}
          style={{ background: `${theme.background}` }}
          pages={2}
        >
          <ParallaxLayer offset={0} speed={1}>
            <MenuOverlay
              scrollSection={parallax}
              changeTheme={changeTheme}
              showMenu={showMenu}
              close={() => toggleMenu(false)}
            ></MenuOverlay>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.5}>
            <Container>
              <div
                style={{
                  display: "flex",
                  position: "relative",
                  flexDirection: "column",
                  height: "100vh"
                }}
              >
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                    height: "80px",
                    alignItems: "flex-end"
                  }}
                >
                  <TakeBackButton
                    click={() => togglePreload(true)}
                  ></TakeBackButton>
                  <Nav
                    openOverlayMenu={() => toggleMenu(true)}
                    disableLogo
                    scrollSection={parallax}
                    changeTheme={changeTheme}
                  ></Nav>
                </div>
              </div>
            </Container>
          </ParallaxLayer>
          <ParallaxLayer speed={0.2} offset={0.2}>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center"
              }}
            >
              <ProjectTitle color="#b19386">{project.title}</ProjectTitle>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0.4} speed={0.3}>
            <ImageWrapper>
              <ProjectImage src={project.img}></ProjectImage>
            </ImageWrapper>
          </ParallaxLayer>
        </Parallax>
      </animated.div>
    ) : (
      <div
        style={{
          background: theme.background || "#fff",
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0
        }}
        key={key}
      ></div>
    )
  );
}

export default withTheme(WorkPage);
