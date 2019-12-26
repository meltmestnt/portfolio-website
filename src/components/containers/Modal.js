import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { useTransition, useSpring, animated, config } from "react-spring";
import useDimensions from "./../../utils/useDimensions";
import ModalTitle from "./../common/ModalTitle";
import ModalSubtitle from "./../common/ModalSubtitle";
import ModalDescription from "./../common/ModalDescription";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CloseButton from "./../common/CloseButton";
import CVLink from "./../common/CVLink";
import PreloadInContainer from "./PreloadInContainer";
import Spinner from "./../common/Spinner";
import {
  faReact,
  faVuejs,
  faJs,
  faHtml5
} from "@fortawesome/free-brands-svg-icons";
import Icon from "./../common/Icon";
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
  font-family: League Spartan, Helvetica, Arial, sans-serif;
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

export const ReactIcon = ({ color }) => (
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
);

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
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    },
    config: config.stiff,
    onRest: () => toggleContainers(true)
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
    enter: {
      opacity: 1,
      transform: `translateY(0%)`,
      left: 0
    },
    leave: {
      opacity: 0.5,
      transform: `translateY(-100%)`,
      left: 0
    },
    config: { mass: 5, friction: 70, tension: 450 },
    onRest: () =>
      setShadow({ boxShadow: `0px 20px 80px 0px rgba(0, 0, 0, 0.55)` })
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
    enter: {
      opacity: 1,
      transform: `translateY(0%)`,
      right: 0
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
                                        <FeedbackMessage>
                                          "The message was sent successfully!"
                                        </FeedbackMessage>
                                      ) : (
                                        <FeedbackMessage>
                                          "Oops! Message was not sent. Please,
                                          try again"
                                        </FeedbackMessage>
                                      )}
                                    </animated.div>
                                  </animated.div>
                                )}
                                <div
                                  style={{
                                    width: "100%",
                                    display: "flex",
                                    padding: 55,
                                    paddingBottom: 0,
                                    justifyContent: "flex-end"
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
                                    padding: 55,

                                    width: "100%"
                                  }}
                                >
                                  <ModalTitle>Let's talk.</ModalTitle>
                                  <ModalSubtitle>
                                    Freelance projects, work or even meeting!
                                  </ModalSubtitle>
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
                                    padding: 55
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      left: 0,
                                      bottom: `${w < 768 ? "93%" : "0px"}`,
                                      padding: `${w <= 768 ? "20px" : "45px"}`
                                    }}
                                  >
                                    <CVLink color="#1c1d25"></CVLink>
                                  </div>
                                  <ModalTitle>About me.</ModalTitle>
                                  <ModalSubtitle>
                                    Front-end developer
                                  </ModalSubtitle>
                                  <ModalDescription>
                                    I'm Denis Bakurov, a 19-year-old{" "}
                                    <strong>Front-end developer </strong>
                                    from Odessa, Ukraine. I'm{" "}
                                    <strong>passionate</strong> about web
                                    development especially about{" "}
                                    <strong>frontend</strong>. I like to create{" "}
                                    <strong>smart </strong>
                                    user interfaces and develop{" "}
                                    <strong>
                                      full and complex web applications
                                    </strong>
                                    . When not working or fooling with code, I
                                    study in Odessa National Polytechnic
                                    University.
                                  </ModalDescription>
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
