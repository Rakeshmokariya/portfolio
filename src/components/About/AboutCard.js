import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rakesh Mokariya </span>
            from <span className="purple"> Gujarat, India.</span>
            <br />
            <br />
            I’m a passionate and dedicated Web Developer specializing in
            React.js, Next.js, Python, and FastAPI. I thrive on creating
            dynamic, user-friendly web applications and building efficient,
            scalable solutions that align with client needs.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading & Learning
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening speeches
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <br />
          <br />
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
