import React from "react";
export default () => {
  let [{ w, h }, toggleDim] = React.useState({
    w: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    h: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
  });
  React.useEffect(() => {
    const resized = () => {
      toggleDim({
        w: Math.max(
          document.documentElement.clientWidth,
          window.innerWidth || 0
        ),
        h: Math.max(
          document.documentElement.clientHeight,
          window.innerHeight || 0
        ),
      });
    };
    window.addEventListener("resize", resized);
    return () => window.removeEventListener("resize", resized);
  }, []);
  return {
    w,
    h,
  };
};
