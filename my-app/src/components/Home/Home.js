import React from "react";
import ReactPlayer from "react-player";
import "./Home.scss";
let i = 0;
const txt = "I am a Full Stack Web Developer.";
let speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("tag").innerHTML += txt.charAt(i);
    i++;
    console.log(i);
    setTimeout(typeWriter, speed);
  }
}
document.onload = () => {
  typeWriter();
};

export default function Home() {
  return (
    <main>
      <div id="video-overlay" />
      <div className="video-container">
        <ReactPlayer
          playing="true"
          autoPlay
          loop
          muted
          height="100%"
          width="100%"
          url="/Videos/Beach.mp4"
          type="video/mp4"
          id="video"
        />
        <h2 className="home-name">Parth Desai</h2>
        <p id="tag"></p>
      </div>
    </main>
  );
}
