import React from "react";
import Link from "./../common/Link";
import styled from "styled-components";
import Logo from "./../common/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdjust } from "@fortawesome/free-solid-svg-icons";
import Modal from "./../containers/Modal";
import { useTranslation } from "react-i18next";
import TranslatedText from "./../containers/TranslatedText";
import Russia from "./../../img/russia.svg";
import UK from "./../../img/united-kingdom.svg";
const Nav = styled.nav`
  display: flex;
  width: ${props => (props.disableLogo ? "auto" : "100%")};
  height: ${props => (props.disableLogo ? "100%" : "80px")};
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  z-index: 99999;
  padding: 0px;
<<<<<<< HEAD
  padding-left: 0px;
=======
  padding-left: 15px;
>>>>>>> 5fab2be34edb6012859f888778fd59ee988a7460
  @media (max-width: 768px) {
    padding: 12px 15px;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
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

const Img = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
  overflow: hidden;
  position: relative;
  opacity: 0.7;
`;

function Navigation({
  changeTheme,
  scrollSection,
  openOverlayMenu,
  disableLogo = false
}) {
  const { t, i18n } = useTranslation();
  const [modal, toggleModal] = React.useState(false);

  const scrollIntoView = () => {
    if (scrollSection) {
      scrollSection.current.scrollTo(1);
    }
  };
  const lang =
    i18n.language.toLowerCase() === "ru" ? (
      <Img src={Russia} alt="" />
    ) : (
      <Img src={UK} alt="" />
    );
  const changeLang = () =>
    i18n.changeLanguage(i18n.language.toLowerCase() === "ru" ? "en" : "ru");
  const close = () => toggleModal(false);
  return (
    <Nav disableLogo={disableLogo}>
      {!disableLogo && <Logo></Logo>}
      <LinksWrapper>
        <TranslatedText trKey="work">
          {(text, rest) => (
            <Link {...rest} click={scrollIntoView}>
              {text}
            </Link>
          )}
        </TranslatedText>

        <TranslatedText trKey="contact">
          {(text, rest) => (
            <Link {...rest} click={() => toggleModal(true)}>
              {text}
            </Link>
          )}
        </TranslatedText>

        <Link click={changeTheme}>
          <FontAwesomeIcon icon={faAdjust} />
        </Link>
        <Link click={changeLang}>{lang}</Link>
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
