import React from "react";
import styled from "styled-components";
import ProjectTitle from "./ProjectTitle";
import ModalDescription from "./ModalDescription";
import LinkButton from "./LinkButton";
import TranslatedText from "./../containers/TranslatedText";
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
      <TranslatedText trKey="project.title">
        {(text, rest) => (
          <ProjectTitle {...rest} themed>
            {text}
          </ProjectTitle>
        )}
      </TranslatedText>
      <div style={{ padding: 25 }}>
        <TranslatedText
          trKey="project.description"
          options={{
            description: project.description,
            rusDesc: project.rusDesc
          }}
        >
          {(text, rest) => (
            <ModalDescription {...rest} themed>
              {text}
            </ModalDescription>
          )}
        </TranslatedText>
      </div>
      <TranslatedText trKey="project.view">
        {(text, rest) => (
          <LinkButton {...rest} href={project.ref}>
            {text}
          </LinkButton>
        )}
      </TranslatedText>
    </Wrapper>
  );
}

export default ProjectDescription;
