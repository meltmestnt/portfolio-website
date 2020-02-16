import React from "react";
import Icon from "./../Icon";
import {
  faReact,
  faVuejs,
  faJs,
  faHtml5
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const ReactIcon = ({ color }) => (
  <Icon title="React" defaultColor={color} color="#18dcff">
    <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
  </Icon>
);
export const VueIcon = ({ color }) => (
  <Icon title="Vue" defaultColor={color} color="#3ae374">
    <FontAwesomeIcon icon={faVuejs}></FontAwesomeIcon>
  </Icon>
);
export const JsIcon = ({ color }) => (
  <Icon title="Javascript" defaultColor={color} color="#ffd32a">
    <FontAwesomeIcon icon={faJs}></FontAwesomeIcon>
  </Icon>
);
export const HTMLIcon = ({ color }) => (
  <Icon title="HTML" defaultColor={color} color="#ff3838">
    <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
  </Icon>
);
