import React from "react";
import styled from "styled-components";
import ProjectTitle from "./ProjectTitle";
import ModalDescription from "./ModalDescription";
import LinkButton from "./LinkButton";
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 15;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

function ProjectDescription({ children, project }) {
  return (
    <Wrapper>
      <ProjectTitle themed>The Project</ProjectTitle>
      <div style={{ padding: 25 }}>
        <ModalDescription themed>{children}</ModalDescription>
      </div>
      <LinkButton href={project.ref}>View site</LinkButton>
    </Wrapper>
  );
}

export default ProjectDescription;
