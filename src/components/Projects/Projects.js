import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pawnetwork from "../../Assets/Projects/Paw network.png";
import vacineanalysis from "../../Assets/Projects/Vaccination.png";
import recommendo from "../../Assets/Projects/Recommendo.png";
import cineai from "../../Assets/Projects/cineai.png";
import mnps from "../../Assets/Projects/mnps.png";
import projecthub from "../../Assets/Projects/project hub.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
        A peek into some of the projects I’ve poured my energy into recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cineai}
              isBlog={false}
              title="Cine AI"
              description="A smart content discovery platform built with React.js, Node.js, Express, and MongoDB. It helps users explore movies and TV shows using AI-driven recommendations powered by Scikit-learn and TensorFlow. Includes secure authentication, content browsing,and personalized suggestions based on viewing behavior."
              ghLink="https://github.com/meetshah27/Cine-AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projecthub}
              isBlog={false}
              title="Project Hub"
              description="A collaborative platform built with Java, AngularJS, and MongoDB to help teams discover and manage projects efficiently. Features dashboards, search filters, GitHub integration,and personalized recommendations—boosting engagement and streamlining team workflows."
              ghLink="https://github.com/meetshah27/WeAreTeam4"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recommendo}
              isBlog={false}
              title="Recommendo"
              description="An AI-powered playlist generator built with Python using LlamaIndex, LangChain, and OpenAI’s GPT models. It generates personalized music playlists based on user inputs like genre, artist, and tags."
              ghLink="https://github.com/meetshah27/Recommendo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pawnetwork}
              isBlog={false}
              title="Pawnetwork"
              description="A decentralized social media app for pet lovers built using Flutter and Dart. It features pet profiles, real-time messaging, a marketplace, and secure authentication — all powered by Firebase on the backend."
              ghLink="https://github.com/Pcdesai11/PawNetwork"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mnps}
              isBlog={false}
              title="MNPS Food Delivery Application"
              description="A full-stack MERN-based platform for browsing restaurants, placing orders, real-time delivery tracking, and secure payments via Stripe API. Features user authentication and dedicated dashboards for all stakeholders."
              ghLink="https://github.com/nynmakwana/Food-Delivery-Application"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vacineanalysis}
              isBlog={false}
              title="Vaccinations Analysis"
              description="A data-driven analysis of COVID-19 vaccination trends in India using Python, Pandas, and Matplotlib. Explores vaccine usage patterns, weekday turnouts, and highlights key insights through data visualizations."
              ghLink="https://github.com/meetshah27/Vaccinations-Analysis"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
