import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import Services from "./Services";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about" style={{ zIndex: 999 }}>
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }} className="text-color">
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body text-color">
              Hi, I’m <b className="purple">Sohail Akbar</b>, a passionate{" "}
              <b className="purple">Full Stack Web Developer</b> with strong
              experience in building modern, scalable, and user-friendly web
              applications.
              <br />
              <br />
              I work confidently with both{" "}
              <i>
                <b className="purple">Frontend and Backend </b>
              </i>
              technologies. My core expertise includes:
              <br />
              <br />
              <i>
                <b className="purple">
                  HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, jQuery,
                  TypeScript
                </b>{" "}
                for frontend development, and{" "}
                <b className="purple">
                  PHP, MySQLi, Node.js, Express.js, MongoDB
                </b>{" "}
                for backend development.
              </i>
              <br />
              <br />
              I also love working with{" "}
              <i>
                <b className="purple">
                  React.js, Chart.js, Fabric.js, and Konva.js
                </b>
              </i>{" "}
              to build interactive and engaging applications.
              <br />
              <br />
              My goal is to keep improving my skills and create impactful{" "}
              <b className="purple">digital solutions</b> that solve real-world
              problems.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Services />
        <Row>
          <Col md={12} className="home-about-social">
            <h1 className="text-color">FIND ME ON</h1>
            <p className="text-color">
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href={process.env.REACT_APP_GITHUB_PROFILE}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={process.env.REACT_APP_TIWITER_PROFILE}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={process.env.REACT_APP_LINKDIN}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={process.env.REACT_APP_INSTAGRAM}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              {/* WhatsApp */}
              <li className="social-icons">
                <a
                  href={process.env.REACT_APP_WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaWhatsapp />
                </a>
              </li>
              {/* Fiverr */}
              <li className="social-icons">
                <a
                  href={process.env.REACT_APP_FIVERR}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiFiverr />
                </a>
              </li>
              {/* YouTube */}
              <li className="social-icons">
                <a
                  href={process.env.REACT_APP_YOUTUBE}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillYoutube />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
