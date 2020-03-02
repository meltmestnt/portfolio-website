import React from "react";
import ProjectCase from "./../common/ProjectCase";
import OverlayEffect from "./../common/OverlayEffect";
function ProjectsList({ projects, scrollContainer }) {
  return projects.map(p => (
    <ProjectCase scroll={scrollContainer} key={p.ref} project={p}></ProjectCase>
  ));
}

export default ProjectsList;
