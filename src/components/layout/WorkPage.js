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
import OverlayEffect from "./../common/OverlayEffect";
import ProjectDescription from "./../common/ProjectDescription";
import ProjectOtherInfo from "./../common/ProjectOtherInfo";
import useDimensions from "./../../utils/useDimensions";
import Footer from "./Footer";
import NotFound from "./NotFound";
import NextProject from "./../common/NextProject";

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
  const { w, h } = useDimensions();
  // const [showContent, toggleContent] = React.useState(false);

  /* React.useEffect(() => {
    if (id) {
      console.log("content show");
      setTimeout(() => toggleContent(true), 350);
    }
  }); */
  const [{ project, nextProject }, changeProject] = React.useState(() => {
    let index = 0;
    return {
      project: projects.find((p, i) => {
        if (p.id === id) {
          index = i + 1 === projects.length ? 0 : i + 1;
          return true;
        } else return false;
      }),
      nextProject: projects.find((p, i) => i === index),
    };
  });
  const transitions = useTransition(project, null, {
    delay: 800,
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 1,
    },
  });
  const [showMenu, toggleMenu] = React.useState(false);
  return transitions.map(({ item, key, props }) =>
    item ? (
      <animated.div
        key={key}
        style={{
          background: theme.background || "#fff",
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          ...props,
        }}
      >
        <Parallax
          ref={(ref) => (parallax.current = ref)}
          style={{ transition: "0.35s", background: `${theme.background}` }}
          pages={w > 768 ? (h < 670 ? 2.35 : 2.2) : 2.46}
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
                  height: "100vh",
                  padding: "10px 0px",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                    height: "80px",
                    alignItems: "flex-end",
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
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div style={{ position: "relative" }}>
                <ProjectTitle color="#b19386">{project.title}</ProjectTitle>
                <OverlayEffect></OverlayEffect>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0.4} speed={0.3}>
            <ImageWrapper>
              <ProjectImage src={project.img}></ProjectImage>
              <OverlayEffect duration={250}></OverlayEffect>
            </ImageWrapper>
          </ParallaxLayer>
          <ParallaxLayer
            style={{ width: w > 768 ? "50%" : "100%" }}
            offset={1}
            speed={0.7}
          >
            <ProjectDescription project={project}>
              {project.description}
            </ProjectDescription>
          </ParallaxLayer>
          <ParallaxLayer
            style={{
              width: w > 768 ? "50%" : "100%",
              marginLeft: w > 768 ? "50%" : "0%",
            }}
            offset={w > 768 ? 1 : 1.5}
            speed={0.75}
          >
            <ProjectOtherInfo project={project}></ProjectOtherInfo>
          </ParallaxLayer>
          <ParallaxLayer
            style={{ background: "#fff", height: 150 }}
            offset={w > 768 ? 1.65 : 1.9}
            speed={0.3}
          >
            <NextProject
              click={() => togglePreload(true)}
              scrollSection={parallax}
              project={nextProject}
            ></NextProject>
          </ParallaxLayer>
          <ParallaxLayer
            style={{ background: "#1c1d25", marginTop: 150 }}
            offset={w > 768 ? 1.65 : 1.9}
            speed={0.3}
          >
            <Footer></Footer>
          </ParallaxLayer>
        </Parallax>
      </animated.div>
    ) : (
      <NotFound></NotFound>
    )
  );
}

export default withTheme(WorkPage);
