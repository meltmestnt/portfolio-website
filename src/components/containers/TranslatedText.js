import React from "react";
import { useTranslation } from "react-i18next";
import OverlayEffect from "./../common/OverlayEffect";
function TranslatedText({ trKey, children, options = null, ...rest }) {
  const { t, i18n } = useTranslation();
  const disableOverlay = React.useRef();
  disableOverlay.current = false;
  const [animate, toggleAnimate] = React.useState(true);
  const [lastLng, changeLastLng] = React.useState(i18n.language);
  const [cachedText, setText] = React.useState(t(trKey, { ...options }));
  React.useEffect(() => {
    if (lastLng !== i18n.language) {
      changeLastLng(i18n.language);
      toggleAnimate(false);
      disableOverlay.current = false;
      setTimeout(() => {
        toggleAnimate(true);
        setText(t(trKey, { ...options }));
        disableOverlay.current = true;
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
        disableOverlay={disableOverlay}
      ></OverlayEffect>
      {children(cachedText, rest)}
    </div>
  );
}

export default TranslatedText;
