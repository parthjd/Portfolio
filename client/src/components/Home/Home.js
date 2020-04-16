import React from "react";
import Typing from "react-typing-animation";
import "./Home.scss";

export default function Home() {
  return (
    <main className="main-page">
      <div id="profile-picture">
        <img className="pic" src={require("../images/profile-pic.png")} />
        <h2 className="home-name">Parth Desai</h2>
        <Typing className="tag" speed={50}>
          <span>I am a </span>
          <span className="quality">Passionate Developer.</span>
          <Typing.Backspace count={21} delay={1500} />
          <span className="quality">Freelancer.</span>
          <Typing.Backspace count={10} delay={1500} />
          <span className="quality">ull Stack Developer.</span>
        </Typing>
      </div>
    </main>
  );
}
