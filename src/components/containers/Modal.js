import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { useTransition, useSpring, animated, config } from "react-spring";
import useDimensions from "./../../utils/useDimensions";
import ModalTitle from "./../common/ModalTitle";
import ModalSubtitle from "./../common/ModalSubtitle";
import ModalDescription from "./../common/ModalDescription";

import CloseButton from "./../common/CloseButton";
import CVLink from "./../common/CVLink";
import PreloadInContainer from "./PreloadInContainer";
import Spinner from "./../common/Spinner";
import TranslatedText from "./TranslatedText";

import { ReactIcon, VueIcon, JsIcon, HTMLIcon } from "./../common/Icons";
import ModalForm from "./ModalForm";
const ModalOverflow = styled.div`
  position: fixed;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.background || "#EBEBEB"};
  @media (max-width: 768px) {
    overflow: auto;
  }
`;

const FeedbackMessage = styled.p`
  color: #fff;
  font-size: 1.2rem;
  white-space: nowrap;
`;

const OverlapText = styled.h1`
  font-size: 190px;
  position: absolute;
  opacity: 0.07;
  font-family: "League Spartan", "Helvetica", "Arial", sans-serif;
  z-index: 0;
`;

const LeftTextOverlap = styled(OverlapText)`
  top: -10px;
  left: 100px;
  color: #4a4a4a;
`;

const RightTextOverlap = styled(OverlapText)`
  bottom: -30px;
  right: -200px;
  color: #fff;
  opacity: 0.03;
`;

const ModalWrapper = styled.div`
  max-width: ${props => (props.fluid ? "100%" : "1240px")};
  margin-right: auto;
  height: auto;
  overflow: hidden;
  width: 100%;
  margin-left: auto;
  display: flex;
  height: 100%;
  position: relative;
  z-index: 999999;
  border-radius: 4px;
  @media (max-width: 768px) {
    flex-direction: column;
    min-height: 100%;
    box-shadow: none;
    border-radius: 0px;
    overflow: auto;
    overflow-x: hidden;
  }
`;

const ModalContainer = styled.div`
  display: flex;
  overflow: hidden;
  z-index: 9999;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  position: relative;
  @media (max-width: 768px) {
    min-height: 100%;
    height: auto;
  }
`;

const LeftContainer = styled(ModalContainer)`
  background-color: hsla(0, 0%, 95%, 0.97);
  color: #1c1d25;
`;

const RightContainer = styled(ModalContainer)`
  color: #dadada;
  background-color: rgba(28, 29, 37, 0.985);
`;

/* export const ReactIcon = ({ color }) => (
  <Icon title="React" defaultColor={color} color="#18dcff">
    <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
  </Icon>
);
export const VueIcon = ({ color }) => (
  <Icon title="Vue" defaultColor={color} color="#3ae374">
    <FontAwesomeIcon icon={faVuejs}></FontAwesomeIcon>
  </Icon>
);
export const JsIcon = ({ color }) => (
  <Icon title="Javascript" defaultColor={color} color="#ffd32a">
    <FontAwesomeIcon icon={faJs}></FontAwesomeIcon>
  </Icon>
);
export const HTMLIcon = ({ color }) => (
  <Icon title="HTML" defaultColor={color} color="#ff3838">
    <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
  </Icon>
); */

const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px 35px 0px;
  width: 100%;
`;

function Modal({ close, modal }) {
  const [containers, toggleContainers] = React.useState(false);
  const [modalShow, toggleModal] = React.useState(modal);
  const [showFeedback, setFeedback] = React.useState("");

  const [feedbackProps, setFeedbackProps] = useSpring(() => ({
    from: {
      opacity: 0,
      width: "100%"
    },
    onRest: () =>
      setFeedbackText({
        opacity: 1,
        transform: `translate(-50%, 50%)`
      })
  }));
  const [feedbackText, setFeedbackText] = useSpring(() => ({
    from: {
      transform: `translate(-50%, 75%)`,
      opacity: 0
    },
    onRest: () =>
      setTimeout(() => {
        setFeedbackText({
          opacity: 0
        });
        setTimeout(() => {
          setFeedbackProps({ width: "0%", opacity: 1 });
          setTimeout(() => {
            triggerLoad(false);
            setFeedback(false);
          }, 500);
        }, 400);
      }, 500)
  }));
  const [showLoad, triggerLoad] = React.useState(false);
  const [shadow, setShadow] = useSpring(() => ({
    from: {
      boxShadow: `0px 0px 0px 0px rgba(0,0,0,0)`
    },
    config: config.stiff
  }));
  React.useEffect(() => toggleModal(modal), [modal]);
  const { w, h } = useDimensions();
  const transition = useTransition(modalShow, item => item, {
    from: {
      opacity: 0
    },
    enter: item => async (next, cancel) => {
      await next({ opacity: 1 });
      toggleContainers(true);
    },
    leave: {
      opacity: 0
    },
    config: config.stiff
  });
  const left = useTransition(containers, item => item, {
    delay: 100,
    initial: {
      left: 0
    },
    from: {
      opacity: 0.5,
      transform: `translateY(-100%)`,
      left: 0
    },
    enter: item => async (next, cancel) => {
      await next({
        opacity: 1,
        transform: `translateY(0%)`,
        left: 0
      });
      if (item)
        setShadow({
          boxShadow: `0px 20px 80px 0px rgba(0, 0, 0, 0.55)`
        });
    },
    leave: {
      opacity: 0.5,
      transform: `translateY(-100%)`,
      left: 0
    },
    config: { mass: 5, friction: 70, tension: 450 }
  });
  const right = useTransition(containers, item => item, {
    delay: 200,
    initial: {
      right: 0
    },
    from: {
      opacity: 0.5,
      transform: `translateY(100%)`,
      right: 0
    },
    enter: item => async (next, cancel) => {
      await next({
        opacity: 1,
        transform: `translateY(0%)`,
        right: 0
      });
      if (item)
        setShadow({
          boxShadow: `0px 20px 80px 0px rgba(0, 0, 0, 0.55)`
        });
    },
    leave: {
      opacity: 0.5,
      transform: `translateY(100%)`,
      right: 0
    },
    config: { mass: 5, friction: 70, tension: 450 }
  });
  const animateClose = () => {
    setShadow({
      boxShadow: `0px 0px 0px 0px rgba(0,0,0,0)`
    });
    setTimeout(() => {
      toggleContainers(false);
      setTimeout(() => {
        toggleModal(false);
        setTimeout(close, 500);
      }, 800);
    }, 500);
  };
  return ReactDOM.createPortal(
    transition.map(
      ({ item, props, key }) =>
        item && (
          <animated.div
            key={key}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              ...props
            }}
          >
            <ModalOverflow>
              <animated.div
                style={{
                  maxWidth: "1240px",
                  marginRight: "auto",
                  overflow: "hidden",
                  width: "100%",
                  marginLeft: "auto",
                  boxShadow: `0px 0px 0px 0px rgba(0,0,0,0)`,
                  height: `${w <= 768 ? "100%" : "90%"}`,
                  position: "relative",
                  zIndex: 999999,
                  ...shadow
                }}
              >
                <ModalWrapper>
                  {[left, right].map((i, index) =>
                    i.map(({ props, key, item }) => {
                      return (
                        "elem:",
                        item && (
                          <animated.div
                            key={key}
                            style={{
                              position: "absolute",
                              top: w > 768 ? 0 : index === 0 ? 0 : "100%",
                              width: w > 768 ? "50%" : "100%",
                              height: "100%",
                              ...props
                            }}
                          >
                            {index === 1 ? (
                              <RightContainer>
                                {showLoad && (
                                  <PreloadInContainer>
                                    <Spinner></Spinner>
                                  </PreloadInContainer>
                                )}
                                {showFeedback && (
                                  <animated.div
                                    style={{
                                      position: "absolute",
                                      top: 0,
                                      left: 0,
                                      width: "0%",
                                      height: "100%",
                                      zIndex: 999999,
                                      background: `${
                                        showFeedback === "success"
                                          ? "#05c46b"
                                          : "#f53b57"
                                      }`,
                                      ...feedbackProps
                                    }}
                                  >
                                    <animated.div
                                      style={{
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -75%)",

                                        whiteSpace: "nowrap",
                                        ...feedbackText
                                      }}
                                    >
                                      {showFeedback === "success" ? (
                                        <TranslatedText trKey="email.success">
                                          {(text, rest) => (
                                            <FeedbackMessage {...rest}>
                                              {text}
                                            </FeedbackMessage>
                                          )}
                                        </TranslatedText>
                                      ) : (
                                        <TranslatedText trKey="email.error">
                                          {(text, rest) => (
                                            <FeedbackMessage {...rest}>
                                              {text}
                                            </FeedbackMessage>
                                          )}
                                        </TranslatedText>
                                      )}
                                    </animated.div>
                                  </animated.div>
                                )}
                                <div
                                  style={{
                                    display: "flex",
                                    position: "absolute",
                                    top: 25,
                                    right: 25
                                  }}
                                >
                                  <CloseButton click={animateClose} />
                                </div>
                                <div
                                  style={{
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    justifyContent: "center",
                                    textAlign: "left",
                                    padding: "55px 40px 0px 40px",
                                    paddingTop: h < 680 ? "15px" : "55px",
                                    width: "100%"
                                  }}
                                >
                                  <TranslatedText trKey="form.talk">
                                    {(text, rest) => (
                                      <ModalTitle {...rest}>{text}</ModalTitle>
                                    )}
                                  </TranslatedText>
                                  <TranslatedText trKey="form.more">
                                    {(text, rest) => (
                                      <ModalSubtitle {...rest}>
                                        {text}
                                      </ModalSubtitle>
                                    )}
                                  </TranslatedText>

                                  <ModalForm
                                    setFeedback={result => {
                                      setFeedback(result);
                                      setFeedbackProps({
                                        opacity: 1,
                                        width: "100%"
                                      });
                                    }}
                                    triggerLoad={() => triggerLoad(true)}
                                  ></ModalForm>
                                </div>

                                <RightTextOverlap>Contact</RightTextOverlap>
                              </RightContainer>
                            ) : (
                              <LeftContainer color="#1c1d25">
                                <div
                                  style={{
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    justifyContent: "center",
                                    textAlign: "left",
                                    padding: "55px 40px 0px 40px"
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      left: 0,
                                      bottom: `${w < 768 ? "90%" : "0px"}`,
                                      padding: `20px`
                                    }}
                                  >
                                    <CVLink color="#1c1d25"></CVLink>
                                  </div>
                                  <TranslatedText trKey="signature.about">
                                    {(text, rest) => (
                                      <ModalTitle {...rest}>{text}</ModalTitle>
                                    )}
                                  </TranslatedText>
                                  <TranslatedText trKey="signature.occupation">
                                    {(text, rest) => (
                                      <ModalSubtitle {...rest}>
                                        {text}
                                      </ModalSubtitle>
                                    )}
                                  </TranslatedText>
                                  <TranslatedText
                                    trKey="description"
                                    options={{
                                      interpolation: { escapeValue: false }
                                    }}
                                  >
                                    {(text, rest) => (
                                      <ModalDescription {...rest}>
                                        <span
                                          dangerouslySetInnerHTML={{
                                            __html: text
                                          }}
                                        ></span>
                                      </ModalDescription>
                                    )}
                                  </TranslatedText>
                                </div>
                                <IconsWrapper>
                                  <ReactIcon color="black"></ReactIcon>
                                  <VueIcon color="black"></VueIcon>
                                  <JsIcon color="black"></JsIcon>
                                  <HTMLIcon color="black"></HTMLIcon>
                                  <LeftTextOverlap>About</LeftTextOverlap>{" "}
                                </IconsWrapper>
                              </LeftContainer>
                            )}
                          </animated.div>
                        )
                      );
                    })
                  )}
                </ModalWrapper>
              </animated.div>
            </ModalOverflow>
          </animated.div>
        )
    ),
    document.getElementById("modal-root")
  );
}

export default Modal;
