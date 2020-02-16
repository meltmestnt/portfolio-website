import React from "react";
import { useTranslation } from "react-i18next";
import OverlayEffect from "./../common/OverlayEffect";
import colorsObj from "./../../humbleColors";
const colors = colorsObj.colors;
function TranslatedText({ trKey, children, options = null, ...rest }) {
  const { t, i18n } = useTranslation();
  const [animate, toggleAnimate] = React.useState(true);
  const [lastLng, changeLastLng] = React.useState(i18n.language);
  const [cachedText, setText] = React.useState(t(trKey, { ...options }));
  const random = Math.floor(Math.random() * (colors.length - 1));
  const color = colors[random];
  React.useEffect(() => {
    if (lastLng !== i18n.language) {
      changeLastLng(i18n.language);
      toggleAnimate(false);
      setTimeout(() => {
        toggleAnimate(true);
        setText(t(trKey, { ...options }));
      }, 800);
    }
  }, [i18n.language, lastLng, trKey, options, t]);
  return (
    <div
      style={{
        margin: "0px 3px 0px 3px",
        overflowX: "hidden",
        display: "flex",
        alignItems: "flex-end",
        position: "relative"
      }}
    >
      <OverlayEffect
        delay={Math.floor(Math.random() * 350)}
        disabled={animate}
        color={color}
      ></OverlayEffect>
      {children(cachedText, rest)}
    </div>
  );
}

export default TranslatedText;
