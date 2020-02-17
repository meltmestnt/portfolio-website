import React from "react";
import Link from "./Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { Link as RouteLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import TranslatedText from "./../containers/TranslatedText";
function TakeBackButton({ click }) {
  const history = useHistory();
  const clicked = e => {
    e.preventDefault();
    if (click) click();
    setTimeout(() => history.push("/"), 500);
  };
  return (
    <RouteLink
      onClick={clicked}
      style={{
        textDecoration: "none",
        height: "100%",
        display: "flex",
        alignItems: "center"
      }}
      to="/"
    >
      <TranslatedText trKey="back">
        {(text, rest) => (
          <Link {...rest}>
            <FontAwesomeIcon
              style={{ margin: "0px 10px", fontSize: "0.95rem" }}
              icon={faLongArrowAltLeft}
            ></FontAwesomeIcon>
            {text}
          </Link>
        )}
      </TranslatedText>
    </RouteLink>
  );
}

export default TakeBackButton;
