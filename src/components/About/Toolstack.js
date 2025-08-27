import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  const tools = [
    { icon: <SiMacos />, name: "macOS" },
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiSlack />, name: "Slack" },
    { icon: <SiVercel />, name: "Vercel" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col
          key={index}
          xs={4}
          md={2}
          className="tech-icons"
          style={{
            textAlign: "center",
            marginBottom: "20px",
            transition: "transform 0.3s ease",
          }}
        >
          <div
            style={{
              fontSize: "3rem",
              marginBottom: "10px",
            }}
            className="tool-icon text-color"
          >
            {tool.icon}
          </div>
          <p style={{ fontWeight: "500", fontSize: "0.9rem" }} className="text-color">
            {tool.name}
          </p>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
