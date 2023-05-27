import React, { useRef } from "react";
import "./Play.css";
import { BiExpand } from "react-icons/bi";

const Play = () => {
  const iframeRef = useRef(null);

  const enterFullscreen = () => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
      } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
      } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
      }
    }
  };

  return (
    <div className="play">
      <div className="game-container">
      <iframe
        ref={iframeRef}
        src="https://v6p9d9t4.ssl.hwcdn.net/html/7798668/ThwackFullWeb/index.html"
        className="game"
      ></iframe>
      <BiExpand onClick={enterFullscreen} id="fullscreen" />
      </div>
    </div>
  );
};

export default Play;
