import React from "react";
import Container from "./components/layout/Container";
import "./App.css";
import { useTransition, animated } from "react-spring";
import Preload from "./components/layout/Preload";
import MainContent from "./components/layout/MainContent";
import WorkContent from "./components/layout/WorkContent";
import styled, { ThemeProvider } from "styled-components";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import NotFound from "./components/layout/NotFound";

import routes from "./components/routes";
import useTheme from "./utils/useTheme";
import themes from "./theme";

import "./components/i18n";

const { dark, light } = themes;

const MainContainer = styled.div`
  background: ${(props) => props.theme.background || "#EBEBEB"};
  width: 100vw;
  overflow-x: hidden;
  min-width: 100vw;
  max-width: 100vw;
`;

function App() {
  const [preload, togglePreload] = React.useState(true);
  const [theme, changeTheme] = useTheme();
  const transitions = useTransition(preload, null, {
    from: { opacity: 0 },
    initial: { opacity: 1 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  const toggleTheme = () => {
    let newTheme = theme === "light" ? "dark" : "light";
    changeTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  let themeObj = theme === "dark" ? dark : light;
  return (
    <Router>
      <MainContainer theme={themeObj}>
        {transitions.map(({ item, key, props }) =>
          item ? (
            <animated.div
              key={key}
              style={{
                background: themeObj.background || "#fff",
                ...props,
              }}
            >
              <Preload off={() => togglePreload(false)}></Preload>
            </animated.div>
          ) : (
            <animated.div
              key={key}
              style={{
                width: "100vw",
                height: "100vh",
                position: "absolute",
                top: 0,
                background: themeObj.background || "#fff",
                left: 0,
                ...props,
              }}
            >
              <ThemeProvider theme={themeObj}>
                <Switch>
                  {routes.map((r) => (
                    <Route path={r.path} key={r.path} exact={r.exact}>
                      {
                        <r.component
                          togglePreload={togglePreload}
                          changeTheme={toggleTheme}
                        ></r.component>
                      }
                    </Route>
                  ))}
                  <Route component={NotFound}></Route>
                </Switch>
              </ThemeProvider>
            </animated.div>
          )
        )}
      </MainContainer>
    </Router>
  );
}

export default App;
