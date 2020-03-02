import React from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import Container from "./../layout/Container";
import Subtitle from "./Subtitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import TranslatedText from "./../containers/TranslatedText";
const NextProjectLink = styled.a`
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
  justify-content: center;
  background: transparent;
  position: relative;
  z-index: 99999;
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
  color: black;
  font-size: 3rem;
  background: transparent;
  z-index: 99999;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: ${props => props.color || "black"};
  text-decoration: underline;
  transition: 0.4s;
  @media (max-width: 768px) {
    font-size: 2.3rem;
  }
`;

function NextProject({ project, scrollSection, click }) {
  const [color, setColor] = React.useState("black");
  const [first, setFirst] = useSpring(() => ({
    from: {
      transform: `translateY(-100%)`
    },
    config: config.stiff
  }));
  const [second, setSecond] = useSpring(() => ({
    from: {
      transform: `translateY(-100%)`
    }
  }));
  const animate = () => {
    setFirst({
      transform: `translateY(0%)`
    });
    setTimeout(() => {
      setSecond({
        transform: `translateY(0%)`
      });
      setTimeout(() => setColor("white"), 100);
    }, 100);
  };
  const undo = () => {
    setFirst({
      transform: `translateY(-100%)`
    });
    setTimeout(() => {
      setSecond({
        transform: `translateY(-100%)`
      });
      setTimeout(() => setColor("black"), 100);
    }, 200);
  };
  const history = useHistory();
  const clicked = e => {
    e.preventDefault();
    if (scrollSection.current) {
      scrollSection.current.scrollTo(0);
    }
    setTimeout(() => {
      click();
      setTimeout(() => history.push(`/work/${project.id}`), 700);
    }, 400);
  };
  return (
    <NextProjectLink
      onMouseLeave={undo}
      onMouseEnter={animate}
      href={`/work/${project.id}`}
      onClick={clicked}
    >
      <animated.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 999,
          background: project.primeColor,
          ...first
        }}
      ></animated.div>
      <animated.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 999,
          background: "black",
          ...second
        }}
      ></animated.div>
      <Container>
        <Left>
          <TranslatedText trKey="project.next">
            {(text, rest) => (
              <Subtitle {...rest} margin="10px 0px" fontSize="0.95rem">
                {text}
              </Subtitle>
            )}
          </TranslatedText>
          <Title color={color}>{project.title}</Title>
        </Left>
        <Right>
          <FontAwesomeIcon
            color={color}
            style={{ transition: "0.4s" }}
            icon={faLongArrowAltRight}
          ></FontAwesomeIcon>
        </Right>
      </Container>
    </NextProjectLink>
  );
}

export default NextProject;
