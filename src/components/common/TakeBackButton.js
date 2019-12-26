import React from "react";
import Link from "./Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { Link as RouteLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

function TakeBackButton({ click }) {
  const history = useHistory();
  const clicked = e => {
    e.preventDefault();
    if (click) click();
    setTimeout(() => history.push("/"), 500);
  };
  return (
    <RouteLink onClick={clicked} style={{ textDecoration: "none" }} to="/">
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
