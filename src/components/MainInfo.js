import React from "react";

export default function MainInfo() {
  return (
    <div className="mainInfo">
      <h1>Gabriel Monge</h1>
      <h3>Junior Developer</h3>
      <h5><a href="https://gabrielmong.github.io/" target="__blank">gabrielmong.github.io</a></h5>
      <div className="linkButtons">
        <a href="mailto: gabriel.monge.lizano@gmail.com"class="emailButton"><i class="fa-solid fa-envelope"></i><a>Email</a></a>
        <a href="https://www.linkedin.com/in/gabrielmonge/" target="__blank"class="linkedInButton"><i class="fa-solid fa-envelope"></i><a>LinkedIn</a></a>
      </div>
    </div>
  );
}
