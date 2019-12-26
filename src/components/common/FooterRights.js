import React from "react";
import styled from "styled-components";

const Rights = styled.p`
  color: white;
  font-size: 0.775rem;
  font-family: "Libre Baskerville", sans-serif;
  text-align: center;
  margin: 5px 0px;
`;

function FooterRights(props) {
  return (
    <Rights>
      © 2019 Denis Bakurov <br></br>
      <a
        href="mailto:beddenis13@gmail.com?subject=Subject&body=message%20goes%20here"
        style={{ textDecoration: "none", color: "white" }}
      >
        Contact
      </a>
    </Rights>
  );
}

export default FooterRights;
