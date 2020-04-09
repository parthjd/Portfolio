import React from "react";
import ReactPlayer from "react-player";
import Typing from "react-typing-animation";
import "./Home.scss";

export default function Home() {
  return (
    <main>
      <div id="video-overlay" />
      <ReactPlayer
        playing="true"
        autoplay
        loop
        muted
        height="100%"
        width="100%"
        url="/Videos/Beach.mp4"
        type="video/mp4"
        id="video"
      />
      <h2 className="home-name">
        Parth <span className="last-name">Desai</span>
      </h2>
      <Typing className="tag" speed={100}>
        <span>I am a </span>
        <span className="quality">Passionate Developer.</span>
        <Typing.Backspace count={21} delay={1500} />
        <span className="quality">Freelancer.</span>
        <Typing.Backspace count={11} delay={1500} />
        <span className="quality">Full Stack Developer.</span>
      </Typing>
    </main>
  );
}
