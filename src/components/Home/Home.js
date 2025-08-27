import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import pdf from "../../Assets/../Assets/sohail resume.pdf";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home" style={{ zIndex: "999" }}>
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header pt-0" style={{ zIndex: 999 }}>
              {/* Greeting */}
              <h1 style={{ paddingBottom: 15 }} className="heading ps-0 text-color">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              {/* Name */}
              <h1 className="heading-name ps-0 text-color">
                I'M
                <strong className="main-name"> Sohail Akbar</strong>
              </h1>

              {/* Typewriter Effect */}
              <div className="pt-0 ps-0" style={{ padding: 30, textAlign: "left" }}>
                <Type />
              </div>

              {/* Short Description */}
              <p className="text-color" style={{ textAlign: "left", marginTop: "15px" }}>
                I’m a passionate <b className="purple">Full Stack Developer</b> who loves
                building modern, scalable, and user-friendly web applications.
                With experience in both <b className="purple">Frontend</b> and <b className="purple">Backend</b> development,
                I enjoy creating impactful digital solutions. 🚀
              </p>

              {/* Social Media Links */}
              <div style={{ marginTop: "20px", textAlign: "left" }}>
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
                      href={process.env.REACT_APP_FIVERR}
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <SiFiverr />
                    </a>
                  </li>
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
                      href={process.env.REACT_APP_WHATSAPP}
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <FaWhatsapp />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Call-to-Action Button */}
              <div style={{ marginTop: "25px", textAlign: "left" }}>
                <Button
                  variant="primary"
                  href={pdf}
                  target="_blank"
                  style={{ backgroundColor: "#6f42c1", border: "none" }}
                >
                  📄 Download Resume
                </Button>
              </div>
            </Col>

            {/* Right Side Image */}
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section >
  );
}

export default Home;
