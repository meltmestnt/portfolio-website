import React from "react";
import Container from "./Container";
import Subtitle from "./../common/Subtitle";
import Title from "./../common/Title";
import TranslatedText from "./../containers/TranslatedText";

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
        <TranslatedText trKey="case studies">
          {(text, rest) => <Subtitle {...rest}>{text}</Subtitle>}
        </TranslatedText>
        <TranslatedText trKey="latest works">
          {(text, rest) => <Title {...rest}>{text}</Title>}
        </TranslatedText>

        <ProjectsList
          scrollContainer={props.scrollContainer}
          projects={projects}
        ></ProjectsList>
      </div>
    </Container>
  );
}

export default React.forwardRef(WorkContent);
