import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Milan Mislov </span>
            from <span className="purple"> Toronto, Canada.</span>
            <br />
            I am currently employed as a software developer at .
            <br />
            I am currently studying computer science at George Brown College.
            <br />
            <br />
            Apart from programming, some other hobbies that I have:
          </p>
          <ul>
            <li className="about-activity">
              Playing Games
            </li>
            <li className="about-activity">
              Watching Shows and Movies
            </li>
            <li className="about-activity">
              Light Reading
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Be your authentic self"{" "}
          </p>
          {/* <footer className="blockquote-footer">Mislov</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
