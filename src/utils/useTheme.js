import { useState, useEffect } from "react";

export default () => {
  useEffect(() => {
    let initialTheme = null;
    let ifLSTheme = ["dark", "light"].includes(localStorage.getItem("theme"));
    if (ifLSTheme) {
      initialTheme = localStorage.getItem("theme");
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      initialTheme = "dark";
    } else {
      initialTheme = "light";
    }
    changeTheme(initialTheme);
  }, []);
  const [theme, changeTheme] = useState("light");
  return [theme, changeTheme];
};
