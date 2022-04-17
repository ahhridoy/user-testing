import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/imports/_imports.scss";

const Banner = () => {
  return (
    <Container>
      <Row>
        <Col md={6} xs={12}>
          <h1>Experience the delight</h1>
          <p>
            Hear what your audience is saying and see what they mean. So you can
            create better experiences.
          </p>
          <button type="button" class="btn btn-outline-primary">
            Request trail
          </button>
          <a href="#">See how it works</a>
        </Col>
        <Col md={6} xs={12}>
        <img src="/assets/banner.png" alt="logo" />
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
