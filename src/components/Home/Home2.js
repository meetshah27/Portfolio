import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Avatar.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      <Row>
  <Col md={8} className="home-about-description">
    <h1 style={{ fontSize: "2.6em" }}>
      LET ME <span className="purple"> INTRODUCE </span> MYSELF
    </h1>
    <p className="home-about-body">
      I code in <b className="purple">C++, JavaScript, Go</b>, and lately, I’ve been deep in the world of <b className="purple">Rust 🦀</b> — currently building my own Operating System from scratch. Systems programming? Count me in.
      <br />
      <br />
      I’ve built everything from <b className="purple">AI-powered movie recommenders 🎬</b> to <b className="purple">scalable CI/CD pipelines 🚀</b> and enterprise-grade apps used by <b className="purple">500K+ users</b>. 
      I work across the stack with tools like <b className="purple">React.js, Next.js, Node.js, ASP.NET Core</b>, and <b className="purple">MongoDB</b>.
      <br />
      <br />
      I’m passionate about <b className="purple">modern web tech 🌐</b>, <b className="purple">cloud infrastructure ☁️</b>, and the future<b className="purple"> LLMS 🤖🧠</b>. 
      Whether it’s architecting backend systems or crafting sleek UIs, I’m all about building things that <i>just work</i> — and scale.
    </p>
  </Col>
  <Col md={4} className="myAvtar">
    <Tilt>
      <img src={myImg} className="img-fluid" alt="avatar" />
    </Tilt>
  </Col>
      </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Let’s Connect</h1>
            <p>
            I’m always open to tech chats, collaborations, or just geeking out over code. <span className="purple">Feel free to reach out!</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/meetshah27"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/122_meet"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/meet-shah-5849751a9/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
