import React from "react";
import Container from "./Container";
import Nav from "./Nav";
import { withTheme } from "styled-components";
import Signature from "./../containers/Signature";
import SocialLinks from "./../common/SocialLinks";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faCircleNotch, faBolt } from "@fortawesome/free-solid-svg-icons";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import WorkContent from "./WorkContent";
import useDimensions from "./../../utils/useDimensions";
import MenuOverlay from "./../containers/MenuOverlay";
import { animated, config, useTransition } from "react-spring";
function MainContent({ changeTheme, theme }) {
  let parallax = React.useRef();
  const [showMenu, toggleMenu] = React.useState(false);
  const { w, h } = useDimensions();
  const transitions = useTransition();
  return (
    <Parallax
      style={{ background: `${theme.background}` }}
      pages={
        h <= 580
          ? 8
          : h <= 640
          ? 7
          : h <= 670
          ? 6.5
          : h <= 731
          ? 6.5
          : h <= 840
          ? 6.3
          : h <= 890
          ? 5.5
          : h <= 1000
          ? 5
          : 4.5
      }
      ref={ref => (parallax.current = ref)}
    >
      <ParallaxLayer offset={0} speed={1}>
        <MenuOverlay
          scrollSection={parallax}
          changeTheme={changeTheme}
          showMenu={showMenu}
          close={() => toggleMenu(false)}
        ></MenuOverlay>
      </ParallaxLayer>
      <ParallaxLayer offset={0.3} speed={0.9}>
        <FontAwesomeIcon
          style={{
            zIndex: -1,
            opacity: 0.5,
            color: "#ff4757",
            marginLeft: "97%"
          }}
          icon={faStar}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.7}>
        <Container>
          <div
            style={{
              display: "flex",
              position: "relative",
              flexDirection: "column",
              height: "100vh"
            }}
          >
            <SocialLinks></SocialLinks>
            <Nav
              openOverlayMenu={() => toggleMenu(true)}
              scrollSection={parallax}
              changeTheme={changeTheme}
            ></Nav>
            <Signature></Signature>
          </div>
        </Container>
      </ParallaxLayer>
      <ParallaxLayer
        style={{
          zIndex: -1,
          opacity: 0.5,
          color: "#ff4757",
          marginLeft: "1%"
        }}
        offset={0.5}
        speed={2}
      >
        <FontAwesomeIcon icon={faStar} />
      </ParallaxLayer>
      <ParallaxLayer
        style={{
          zIndex: -1,
          opacity: 0.5,
          color: "#ffa502",
          marginLeft: "3%"
        }}
        offset={0.3}
        speed={0.5}
      >
        <FontAwesomeIcon icon={faStar} />
      </ParallaxLayer>{" "}
      <ParallaxLayer
        style={{
          zIndex: -1,
          opacity: 0.5,
          color: "#3742fa",
          marginLeft: "5%"
        }}
        offset={0.95}
        speed={1}
      >
        <FontAwesomeIcon icon={faStar} />
      </ParallaxLayer>{" "}
      <ParallaxLayer
        style={{
          zIndex: -1,
          opacity: 0.5,
          color: "#2f3542",
          marginLeft: "51%"
        }}
        offset={0.65}
        speed={1}
      >
        <FontAwesomeIcon icon={faBolt} />
      </ParallaxLayer>
      <ParallaxLayer
        style={{
          zIndex: -1,
          opacity: 0.5,
          color: "#ffa502",
          marginLeft: "43%"
        }}
        offset={0.73}
        speed={1}
      >
        <FontAwesomeIcon icon={faBolt} />
      </ParallaxLayer>
      <ParallaxLayer
        style={{
          zIndex: -1,
          opacity: 0.5,
          color: "#ff4757",
          marginLeft: "26%"
        }}
        offset={0.33}
        speed={1}
      >
        <FontAwesomeIcon icon={faBolt} />
      </ParallaxLayer>
      <ParallaxLayer
        style={{
          zIndex: -1,
          opacity: 0.5,
          color: "#ff4757",
          marginLeft: "76%"
        }}
        offset={0.82}
        speed={1}
      >
        <FontAwesomeIcon icon={faBolt} />
      </ParallaxLayer>
      <ParallaxLayer
        style={{
          zIndex: -1,
          opacity: 0.5,
          color: "#3742fa",
          marginLeft: "13%"
        }}
        offset={0.94}
        speed={1}
      >
        <FontAwesomeIcon icon={faBolt} />
      </ParallaxLayer>
      <ParallaxLayer
        style={{
          zIndex: -1,
          opacity: 0.5,
          color: "#ff6348",
          marginLeft: "96%"
        }}
        offset={0.13}
        speed={1}
      >
        <FontAwesomeIcon icon={faBolt} />
      </ParallaxLayer>
      <ParallaxLayer
        style={{
          zIndex: -1,
          opacity: 0.5,
          color: "#ff6348",
          marginLeft: "20%"
        }}
        offset={0.7}
        speed={1}
      >
        <FontAwesomeIcon icon={faCircleNotch} />
      </ParallaxLayer>
      <ParallaxLayer
        style={{
          zIndex: -1,
          opacity: 0.5,
          color: "#3742fa",
          marginLeft: "5%"
        }}
        offset={0.95}
        speed={1}
      >
        <FontAwesomeIcon icon={faCircleNotch} />
      </ParallaxLayer>
      <ParallaxLayer
        style={{
          zIndex: -1,
          opacity: 0.5,
          color: "#ff6348",
          marginLeft: "35%"
        }}
        offset={0.3}
        speed={0.3}
      >
        <FontAwesomeIcon icon={faCircleNotch} />
      </ParallaxLayer>
      <ParallaxLayer
        style={{
          zIndex: -1,
          opacity: 0.5,
          color: "#3742fa",
          marginLeft: "87%"
        }}
        offset={0.65}
        speed={1}
      >
        <FontAwesomeIcon icon={faCircleNotch} />
      </ParallaxLayer>
      <ParallaxLayer
        style={{
          zIndex: -1,
          opacity: 0.5,
          color: "#ff6348",
          marginLeft: "97%"
        }}
        offset={0.9}
        speed={3}
      >
        <FontAwesomeIcon icon={faStar} />
      </ParallaxLayer>{" "}
      <ParallaxLayer
        style={{
          zIndex: -1,
          opacity: 0.5,
          color: "#ffa502",
          marginLeft: "90%"
        }}
        offset={0.2}
        speed={0.1}
      >
        <FontAwesomeIcon icon={faStar} />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.2}>
        <WorkContent scrollContainer={parallax} />
      </ParallaxLayer>
      <ParallaxLayer
        style={{ background: "#1c1d25" }}
        offset={
          h <= 580
            ? 7.5
            : h <= 640
            ? 6.5
            : h <= 670
            ? 6
            : h <= 731
            ? 6
            : h <= 840
            ? 5.65
            : h <= 890
            ? 5
            : h <= 1000
            ? 4.5
            : 4
        }
        speed={0.2}
      >
        <Footer></Footer>
      </ParallaxLayer>
    </Parallax>
  );
}

export default withTheme(MainContent);
