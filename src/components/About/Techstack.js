import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { SiCsharp, SiRust } from "react-icons/si";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import {SiTypescript, SiDotnet, SiPython, SiDjango, SiAngular, SiPostgresql, SiMysql,SiAmazonaws, SiMicrosoftazure } from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";

function Techstack() {
  return (
<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
  {/* Languages */}
  <Col xs={4} md={2} className="tech-icons">
    <SiPython />
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiCsharp />
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiRust />
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <FaHtml5 />
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <FaCss3Alt />
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <DiJavascript1 />
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiTypescript />
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <CgCPlusPlus />
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <DiJava />
  </Col>

  {/* Frameworks & Libraries */}
  <Col xs={4} md={2} className="tech-icons">
    <DiNodejs />
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <DiReact />
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiDotnet />
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiDjango />
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiAngular />
  </Col>

  {/* Databases */}
  <Col xs={4} md={2} className="tech-icons">
    <DiMongodb />
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiPostgresql />
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiMysql />
  </Col>

  {/* Cloud Platforms */}
  <Col xs={4} md={2} className="tech-icons">
    <SiAmazonaws />
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiMicrosoftazure />
  </Col>
</Row>

  );
}

export default Techstack;
