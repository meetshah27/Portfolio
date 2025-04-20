import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
<Card className="quote-card-view">
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p style={{ textAlign: "justify" }}>
        Hi Everyone! I’m <span className="purple">Meet Shah</span>, a Software Engineer based in <span className="purple">Seattle, Washington.</span>
        <br />
        I'm currently pursuing my Master’s in Computer Science at Seattle University, and I previously worked as a Software Engineer at i3 Verticals,
        where I built large-scale systems for vehicle permit processing and automated CI/CD pipelines for smoother deployments.
        <br />
        <br />
        Apart from coding, here’s what I love to do:
      </p>
      <ul>
        <li className="about-activity">
          <ImPointRight /> Playing Games
        </li>
        <li className="about-activity">
          <ImPointRight /> Writing and sharing tech ideas
        </li>
        <li className="about-activity">
          <ImPointRight /> Editing Videos
        </li>
        <li className="about-activity">
          <ImPointRight /> Exploring new places & experiences
        </li>
      </ul>
      <p style={{ color: "rgb(155 126 172)" }}>
        "If life is simple to live it is as short to live!"{" "}
      </p>
      <footer className="blockquote-footer">Meet Shah</footer>
    </blockquote>
  </Card.Body>
</Card>
  );
}

export default AboutCard;
