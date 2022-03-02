import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function AboutMe() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="left">
            <div className="imgcontainer">
              <img src={Me} alt="" />
            </div>
          </div>
        </Col>
        <Col>
          <div className="right">
            <h1>About Me</h1>
            <p>

            </p>
            </div>
        </Col>
      </Row>
    </Container>
  );
}      