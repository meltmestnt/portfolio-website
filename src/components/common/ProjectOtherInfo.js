import React from "react";
import { Wrapper } from "./ProjectDescription";
import ProjectTitle from "./ProjectTitle";
import styled from "styled-components";
import Subtitle from "./Subtitle";
import Link from "./CVLink";
import { withTheme } from "styled-components";
import TranslatedText from "./../containers/TranslatedText";
const Text = styled.p`
  color: ${props => props.theme.color || "#fff"};
  font-family: "Libre Baskerville", sans-serif !important;
  font-weight: 400;
  margin: 10px 0px;
  font-size: 1rem;
`;

function ProjectOtherInfo({ project, theme }) {
  return (
    <Wrapper>
      <TranslatedText trKey="project.otherTitle">
        {(text, rest) => (
          <ProjectTitle {...rest} themed>
            {text}
          </ProjectTitle>
        )}
      </TranslatedText>
      <Wrapper>
        {project.icons.map(I => (
          <I key={I} color={theme.color}></I>
        ))}

        <div style={{ margin: "45px 0px" }}>
          <Link themed text="Github" href={project.github}></Link>
        </div>
      </Wrapper>
    </Wrapper>
  );
}

export default withTheme(ProjectOtherInfo);
