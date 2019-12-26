import React from "react";
import Link from "./Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { Link as RouteLink } from "react-router-dom";

function TakeBackButton(props) {
  return (
    <RouteLink style={{ textDecoration: "none" }} to="/">
      <Link>
        <FontAwesomeIcon
          style={{ margin: "0px 10px" }}
          icon={faLongArrowAltLeft}
        ></FontAwesomeIcon>
        Take me back
      </Link>
    </RouteLink>
  );
}

export default TakeBackButton;
