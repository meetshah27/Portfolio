import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiWindows, SiFirebase, SiJenkins, SiDocker, SiVisualstudiocode, SiVisualstudio, SiJupyter, SiAnaconda, SiPostman, SiSlack, SiVercel } from "react-icons/si";
import { DiGit } from "react-icons/di";
function Toolstack() {
  return (
<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
  {/* Operating System */}
  <Col xs={4} md={2} className="tech-icons">
    <SiWindows />
  </Col>

  {/* DevOps & Deployment */}
  <Col xs={4} md={2} className="tech-icons">
    <SiFirebase />
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiJenkins />
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiDocker />
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiVercel />
  </Col>

  {/* Version Control */}
  <Col xs={4} md={2} className="tech-icons">
    <DiGit />
  </Col>

  {/* Code Editors / IDEs */}
  <Col xs={4} md={2} className="tech-icons">
    <SiVisualstudiocode />
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiVisualstudio />
  </Col>

  {/* Data & Scientific Tools */}
  <Col xs={4} md={2} className="tech-icons">
    <SiJupyter />
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiAnaconda />
  </Col>

  {/* Collaboration & API Tools */}
  <Col xs={4} md={2} className="tech-icons">
    <SiPostman />
  </Col>
  <Col xs={4} md={2} className="tech-icons">
    <SiSlack />
  </Col>
</Row>


  );
}

export default Toolstack;
