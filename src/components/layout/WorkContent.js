import React from "react";
import Container from "./Container";
import Subtitle from "./../common/Subtitle";
import Title from "./../common/Title";

import ProjectsList from "./../containers/ProjectsList";

import projects from "./../projects";

function WorkContent(props, ref) {
  return (
    <Container>
      <div
        ref={ref}
        style={{
          display: "flex",
          position: "relative",
          flexDirection: "column",
          minHeight: "100vh",
          alignItems: "center"
        }}
      >
        <Subtitle>Case studies</Subtitle>
        <Title>Latest Works</Title>
        <ProjectsList
          scrollContainer={props.scrollContainer}
          projects={projects}
        ></ProjectsList>
      </div>
    </Container>
  );
}

export default React.forwardRef(WorkContent);
