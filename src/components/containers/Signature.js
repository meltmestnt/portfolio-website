import React from "react";
import styled from "styled-components";
import Button from "./../common/Button";
import Modal from "./../containers/Modal";
import OverlayEffect from "./../common/OverlayEffect";
import TranslatedText from "./TranslatedText";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`;

const Header = styled.h1`
  color: ${props => props.theme.color};
  transition: 0.5s;
  transition-delay: 0.7s;
  font-size: 4rem;
  margin: 10px;
  @media (max-width: 768px) {
    font-size: 2.7rem;
  }
`;

export const SubHeader = styled.p`
  font-style: italic;
  font-size: ${props => props.customSize || "2rem"};
  margin: 10px;
  position: relative;
  z-index: 9999;
  color: ${props => props.customColor || props.theme.color};
  font-weight: 300;
  font-family: "Libre Baskerville", sans-serif !important;
  @media (max-width: 768px) {
    font-size: ${props => props.responsiveSize || props.customSize || "1.5rem"};
  }
`;

function Signature(props) {
  const [modal, toggleModal] = React.useState(false);
  const close = () => toggleModal(false);
  return (
    <Wrapper>
      <div style={{ position: "relative", margin: "10px 0px" }}>
        <TranslatedText trKey="signature.me">
          {(text, rest) => <Header {...rest}>{text}</Header>}
        </TranslatedText>
        <OverlayEffect></OverlayEffect>
      </div>
      <div style={{ position: "relative", margin: "10px 0px" }}>
        <TranslatedText trKey="signature.occupation">
          {(text, rest) => <SubHeader {...rest}>{text}</SubHeader>}
        </TranslatedText>
        <OverlayEffect duration={200}></OverlayEffect>
      </div>
      <div style={{ position: "relative", margin: "10px 0px" }}>
        <OverlayEffect duration={350}></OverlayEffect>
        <TranslatedText trKey="signature.about">
          {(text, rest) => (
            <Button click={() => toggleModal(true)}>{text}</Button>
          )}
        </TranslatedText>
      </div>

      {modal && <Modal modal={modal} close={close}></Modal>}
    </Wrapper>
  );
}

export default Signature;
