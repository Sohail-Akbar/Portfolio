import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sohail Akbar</span> from{" "}
            <span className="purple">Mian Channu, Pakistan.</span>
            <br />
            I started my career with a{" "}
            <span className="purple">6-month internship</span> at{" "}
            <b>Naxotop</b>. After successfully completing it, I was offered a{" "}
            <span className="purple">3-year contract</span> with the same
            company, where I worked with full dedication and gained strong
            industry experience.
            <br />
            <br />
            After completing my contract, I joined{" "}
            <b>Intellectual Bunch Limited</b> in Lahore as a{" "}
            <span className="purple">Full Stack Developer</span>.
            <br />
            Alongside my professional journey, I am also actively working as a{" "}
            <span className="purple">freelancer</span>, delivering web
            development solutions to clients worldwide.
            <br />
            <br />
            Apart from coding, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Freelancing & building projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning and personal growth
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Hard work and consistency always pay off — keep learning and keep
            building!"{" "}
          </p>
          <footer className="blockquote-footer">Sohail Akbar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
