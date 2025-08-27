import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer" style={{ borderTop: "1px solid #ccc" }}>
      <Row>
        <Col md="4" className="footer-copywright text-color">
          <h3 className="text-color">Designed and Developed by Sohail</h3>
        </Col>
        <Col md="4" className="footer-copywright text-color" >
          <h3 className="text-color">Copyright © {year} SB</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                className="text-color"
                href={process.env.REACT_APP_GITHUB_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                className="text-color"
                href={process.env.REACT_APP_TIWITER_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                className="text-color"
                href={process.env.REACT_APP_LINKDIN}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                className="text-color"
                href={process.env.REACT_APP_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
