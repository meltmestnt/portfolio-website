import React from "react";
import Container from "./Container";
import Link from "./../common/Link";
import styled, { withTheme } from "styled-components";

import TranslatedText from "./../containers/TranslatedText";
const NotFoundNumber = styled.h1`
  font-size: 4rem;
  color: ${(props) => props.theme.color};
  display: block;
  width: 100%;
  text-align: center;
`;

function NotFound({ theme }) {
  return (
    <Container
      style={{
        padding: 25,
        minHeight: "100vh",
        background: theme.background || "#fff",
      }}
    >
      <NotFoundNumber>404</NotFoundNumber>
      <span style={{ display: "flex", justifyContent: "center" }}>
        <TranslatedText trKey="goHome">
          {(text, ...rest) => <Link href="/">{text}</Link>}
        </TranslatedText>
      </span>
    </Container>
  );
}

export default withTheme(NotFound);
