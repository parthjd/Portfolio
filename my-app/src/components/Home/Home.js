import React from "react";
import ReactPlayer from "react-player";

export default function Home() {
  return (
    <main>
      <div id="video-overlay" />
      <ReactPlayer
        playing="true"
        autoplay
        loop
        muted
        width="100%"
        height="100%"
        url="../Video/Beach Aerial view.mp4"
        type="video/mp4"
      />
      <h2 className="tag">Parth Desai</h2>
      <p className="tag-line">I am a Full Stack Web Developer.</p>
    </main>
  );
}
