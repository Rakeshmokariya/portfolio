import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

import salesleg from "../../Assets/Projects/salesleg.png";
import luki from "../../Assets/Projects/luki.png";
import football from "../../Assets/Projects/football.png";
import nobislab from "../../Assets/Projects/nobislab.jpg";
import bizpole from "../../Assets/Projects/bizpole.jpg";
import profitpilot from "../../Assets/Projects/profit-pilot.png";

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
              imgPath={luki}
              isBlog={false}
              title="Luki App"
              description="Luki App The platform enables users to pay, send, and receive money without ever leaving the
 application. Through intuitive interfaces and streamlined processes, users can conduct all their
 financial operations efficiently and conveniently."
              demoLink="https://luki.com.pa/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={salesleg}
              isBlog={false}
              title="Sales Leg"
              description="Salesleg is a comprehensive lead management tool with lead tracking, progression, scheduling,
 and reporting features. It organizes sales processes, schedules follow-ups, and provides
 insightful performance reports for enhanced sales strategy optimization."
              demoLink="https://www.salesleg.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nobislab}
              isBlog={false}
              title="Nobis Lab"
              description="A sophisticated tool designed to empower prominent organizations in trading commodity
 contracts with unprecedented accuracy and foresight. This cutting-edge platform offers
 invaluable predictions for the next 15, 30, 60, and 90 days, providing a strategic advantage in
 the fast-paced commodity market."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={profitpilot}
              isBlog={false}
              title="Profit Pilot"
              description="Profit Pilot is an advanced e-commerce platform designed to streamline and optimize various aspects of e-commerce business operations. As part of my work on this platform, I manage the seamless integration and processing of multiple data files, including Sales Order Files, Return Files, Actual Return Files, and Payment Files."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={football}
              isBlog={false}
              title="Football"
              description="Football is an app that add player on ground of their position. if player is more than 11 player
 that can not display the player on the ground."
              demoLink="https://football-manger-app.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bizpole}
              isBlog={false}
              title="Bizpole"
              description=" Bizpole,providing businesses with a one-stop platform for trademark registration, brand protection, and intellectual property
 management. Users can easily search, apply, and monitor their trademarks, with expert guidance and legal support throughout the
 process, ensuring the security of their valuable brand assets."
              demoLink="https://www.bizpole.in/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
