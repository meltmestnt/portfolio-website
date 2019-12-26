import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
function CloseButton({ click }) {
  return (
    <FontAwesomeIcon
      onClick={click}
      style={{
        cursor: "pointer",
        fontFamily: "serif",
        fontWeight: 300,
        color: "#dadada",
        fontSize: "2.5rem"
      }}
      icon={faTimes}
    ></FontAwesomeIcon>
  );
}

export default CloseButton;
