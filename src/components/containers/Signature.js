import React from "react";
import styled from "styled-components";
import Button from "./../common/Button";
import Modal from "./../containers/Modal";
import OverlayEffect from "./../common/OverlayEffect";
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
    font-size: 3rem;
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
    font-size: ${props => props.responsiveSize || props.customSize || "2rem"};
  }
`;

function Signature(props) {
  const [modal, toggleModal] = React.useState(false);
  const close = () => toggleModal(false);
  return (
    <Wrapper>
      <div style={{ position: "relative", margin: "10px 0px" }}>
        <Header>Denis Bakurov</Header>
        <OverlayEffect></OverlayEffect>
      </div>
      <div style={{ position: "relative", margin: "10px 0px" }}>
        <SubHeader>Front-end developer</SubHeader>
        <OverlayEffect></OverlayEffect>
      </div>
      <div style={{ position: "relative", margin: "10px 0px" }}>
        <OverlayEffect></OverlayEffect>
        <Button click={() => toggleModal(true)}>About me</Button>
      </div>

      {modal && <Modal modal={modal} close={close}></Modal>}
    </Wrapper>
  );
}

export default Signature;
