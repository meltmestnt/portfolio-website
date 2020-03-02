import React from "react";
import PreloadInContainer from "./PreloadInContainer";
import ReactDOM from "react-dom";
import CloseButton from "./../common/CloseButton";
import { animated, useSpring, config } from "react-spring";
import SocialLinks from "./../common/SocialLinks";
import styled from "styled-components";
import Link from "./../common/Link";
import Modal from "./../containers/Modal";

import { useTranslation } from "react-i18next";

const LinksWrapper = styled.div`
  height: 100%;
  padding: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function MenuOverlay({ showMenu, close, scrollSection, changeTheme }) {
  const [modal, toggleModal] = React.useState(false);
  const { t, i18n } = useTranslation();
  const [animateBack, setAnimateBack] = React.useState(false);
  const [main, setMain] = useSpring(() => ({
    from: {
      opacity: 0,
      transform: `translateY(20%)`
    },
    config: config.slow
  }));
  const [times, setTimes] = useSpring(() => ({
    from: {
      opacity: 0
    }
  }));
  const scrollIntoView = () => {
    if (scrollSection) {
      scrollSection.current.scrollTo(1);
    }
  };
  const animate = func => {
    setMain({ opacity: 0, transform: "translateY(20%)" });
    setTimes({ opacity: 0 });
    setTimeout(() => {
      setAnimateBack(true);
      setTimeout(() => {
        close();
        setTimeout(() => {
          func();
          setTimeout(() => setAnimateBack(false), 500);
        }, 300);
      }, 600);
    }, 500);
  };
  const callback = () => {
    setTimes({ opacity: 1 });
    setMain({ opacity: 1, transform: "translateY(0%)" });
  };
  const changeLang = () =>
    i18n.changeLanguage(i18n.language.toLowerCase() === "ru" ? "en" : "ru");
  return ReactDOM.createPortal(
    showMenu ? (
      <div
        style={{
          position: "fixed",
          background: "transparent",
          top: 0,
          left: 0,
          overflow: "hidden",
          width: "100vw",
          height: "100vh",
          zIndex: 999999
        }}
      >
        <PreloadInContainer
          animateBack={animateBack}
          callback={callback}
          zIndex={999999}
        >
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              overflow: "hidden"
            }}
          >
            <animated.div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                margin: 25,
                zIndex: 999999,
                ...times
              }}
            >
              <CloseButton click={() => animate(close)}></CloseButton>
            </animated.div>
            <animated.div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                overflow: "hidden",
                transform: "translateY(20%)",
                ...main
              }}
            >
              <LinksWrapper>
                <Link color="#fff" click={() => animate(scrollIntoView)}>
                  Work
                </Link>
                <Link
                  color="#fff"
                  click={() => animate(() => toggleModal(true))}
                >
                  Contact
                </Link>
                <Link color="#fff" click={() => animate(changeTheme)}>
                  Change Theme
                </Link>
                <Link color="#fff" click={() => animate(changeLang)}>
                  {i18n.language.toUpperCase()}
                </Link>
              </LinksWrapper>
              <SocialLinks enable={true} direction="row"></SocialLinks>
            </animated.div>
          </div>
        </PreloadInContainer>
      </div>
    ) : (
      modal && <Modal modal={modal} close={() => toggleModal(false)}></Modal>
    ),

    document.getElementById("modal-root")
  );
}

export default MenuOverlay;
