import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/imports/_imports.scss";

const Banner = () => {
  return (
    <Container id="banner">
      <Row className="banner-sec">
        <Col md={6} xs={12}>
          <h1 className="heading">Experience the delight</h1>
          <p className="sub-text">
            Hear what your audience is saying and see what they mean. So you can
            create better experiences.
          </p>
          <div className="bottom">
          <button type="button" className="btn btn-outline-primary">
            Request trail
          </button>
          <a href="#">See how it works</a>
          </div>
        </Col>
        <Col md={6} xs={12}>
        <img src="/assets/banner.png" alt="logo" />
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
