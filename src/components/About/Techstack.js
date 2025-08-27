import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiMysql,
  DiGit,
  DiPhp,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiBootstrap,
  SiJquery,
  SiExpress,
  SiTypescript,
  SiChartdotjs,
  SiFirebase,
} from "react-icons/si";
import { FaGithub, FaTrello, FaPython } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaPaintBrush } from "react-icons/fa"; // for Fabric.js / Konva.js

function Techstack() {
  const skills = [
    { icon: <DiHtml5 />, name: "HTML" },
    { icon: <DiCss3 />, name: "CSS" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiBootstrap />, name: "Bootstrap" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiJquery />, name: "jQuery" },
    { icon: <DiPhp />, name: "PHP" },
    { icon: <DiMysql />, name: "MySQLi" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <DiReact />, name: "React.js" },
    { icon: <TbBrandNextjs />, name: "Next.js" },
    { icon: <SiChartdotjs />, name: "Chart.js" },
    { icon: <FaPaintBrush />, name: "Fabric.js" },
    { icon: <FaPaintBrush />, name: "Konva.js" },
    { icon: <DiGit />, name: "Git" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <FaTrello />, name: "Trello" },
    { icon: <FaPython />, name: "Python" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((skill, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons text-center">
          <div style={{ fontSize: "3rem" }}>{skill.icon}</div>
          <p style={{ marginTop: "10px", fontSize: "0.9rem", color: "#fff" }}>
            {skill.name}
          </p>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
