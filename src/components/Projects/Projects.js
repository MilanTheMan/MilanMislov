import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import bizchats from "../../Assets/Projects/bizchats.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bizchats}
              isBlog={false}
              title="Bizchat"
              description="Bizchats is a versatile web-based and mobile application designed to cater to the needs of 
              educational institutions and businesses. It combines effective communication tools with 
              advanced collaboration features. Bizchats is accessible via the user-friendly website and 
              mobile app on both iOS and Android, allowing users to stay connected anytime, anywhere."
              ghLink="https://github.com/MilanTheMan/Bizchats"
              demoLink="https://main.dn5s0tbye754g.amplifyapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
