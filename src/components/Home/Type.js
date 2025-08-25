import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer 👨‍💻",
          "Freelancer 🌍",
          "MERN Stack Developer ⚡",
          "Open Source Contributor 🚀",
          "Full Stack Web Developer 🌐",
          "Tech Enthusiast 💡",
          "Problem Solver 🔥",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        delay: 75, // typing speed
        pauseFor: 2000, // pause before deleting
      }}
      onInit={(typewriter) => {
        typewriter
          .pauseFor(500)
          .deleteAll()
          .typeString("Welcome to my portfolio 👋")
          .pauseFor(1500)
          .deleteAll()
          .start();
      }}
    />
  );
}

export default Type;
