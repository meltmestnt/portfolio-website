import React from "react";
import Link from "./../common/Link";
import styled from "styled-components";
import Logo from "./../common/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdjust } from "@fortawesome/free-solid-svg-icons";
import Modal from "./../containers/Modal";
const Nav = styled.nav`
  display: flex;
  width: ${props => (props.disableLogo ? "auto" : "100%")};
  height: ${props => (props.disableLogo ? "100%" : "80px")};
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  z-index: 99999;
  padding: 0px;
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-end;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Burger = styled.span`
  display: flex;
  width: 42px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;

const BurgerLine = styled.span`
  height: 3px;
  border-radius: 8px;
  background: #dbdce4;
  margin-top: 5px;
`;

const First = styled(BurgerLine)`
  width: 100%;
`;

const Second = styled(BurgerLine)`
  width: 70%;
`;

const Third = styled(BurgerLine)`
  width: 40%;
`;

function Navigation({
  changeTheme,
  scrollSection,
  openOverlayMenu,
  disableLogo = false
}) {
  const [modal, toggleModal] = React.useState(false);

  const scrollIntoView = () => {
    if (scrollSection) {
      scrollSection.current.scrollTo(1);
    }
  };
  const close = () => toggleModal(false);
  return (
    <Nav disableLogo={disableLogo}>
      {!disableLogo && <Logo></Logo>}
      <LinksWrapper>
        <Link click={scrollIntoView}>Work</Link>
        <Link click={() => toggleModal(true)}>Contact</Link>
        <Link click={changeTheme}>
          <FontAwesomeIcon icon={faAdjust} />
        </Link>
      </LinksWrapper>
      <Burger onClick={openOverlayMenu}>
        <First></First>
        <Second></Second>
        <Third></Third>
      </Burger>
      {modal && <Modal modal={modal} close={close}></Modal>}
    </Nav>
  );
}

export default Navigation;
