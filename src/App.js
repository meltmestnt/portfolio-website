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
import themes from "./theme";
import routes from "./components/routes";

import "./components/i18n";

const MainContainer = styled.div`
  background: ${props => props.theme.background || "#EBEBEB"};
  transition: 0.5s;
  width: 100vw;
  overflow-x: hidden;
  min-width: 100vw;
  max-width: 100vw;
`;

const { dark, light } = themes;

function App() {
  const [preload, togglePreload] = React.useState(true);
  const [theme, changeTheme] = React.useState(light);
  const transitions = useTransition(preload, null, {
    from: { opacity: 0 },
    initial: { opacity: 1 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  const toggleTheme = () => changeTheme(theme === light ? dark : light);
  return (
    <Router>
      <MainContainer theme={theme}>
        {transitions.map(({ item, key, props }) =>
          item ? (
            <animated.div
              key={key}
              style={{
                transition: "0.35s",
                background: theme.background || "#fff",
                ...props
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
                left: 0,
                ...props
              }}
            >
              <ThemeProvider theme={theme}>
                <Switch>
                  {routes.map(r => (
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
