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

function WorkPage({ changeTheme, theme }) {
  const { id } = useParams();
  const [project, changeProject] = React.useState(
    projects.find(p => p.id === id)
  );
  console.log(project, id, projects);
  return (
    <Parallax style={{ background: `${theme.background}` }} pages={2}>
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
              <TakeBackButton></TakeBackButton>
              <Nav disableLogo changeTheme={changeTheme}></Nav>
            </div>
          </div>
        </Container>
      </ParallaxLayer>
      <ParallaxLayer speed={0.2} offset={0.2}>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
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
  );
}

export default withTheme(WorkPage);
