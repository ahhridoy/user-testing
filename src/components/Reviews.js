import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container>
      <h1 className="heading">Customer success through understanding</h1>
      <Slider {...settings}>
        <div>
          <Row>
            <Col md={6} xs={12}>
              <p>
                "To help our customers launch the most compelling digital
                experiences, we partner with UserTesting to bring human insight
                into our design process, empowering us with a higher degree of
                confidence."
              </p>
              <div className="review-sub-box">
                <img src="/assets/bio-img1.jpg" alt="logo" />
                <p>
                  <span>Jaime Vasquez</span> | Principal Experience Architect &
                  Digital Strategist, Adobe Consulting
                </p>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <img className="col-img" src="/assets/adobe.png" alt="logo" />
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col md={6} xs={12}>
              <p>
                "Our CEO, Satya Nadella, tells us often that the source of
                innovation comes from having a deep sense of empathy. And it's
                true, empathy makes us better innovators. Today, Microsoft is
                stronger than ever. UserTesting helps our entire company get
                feedback from our customers at every single point in the
                journey."
              </p>
              <div className="review-sub-box">
                <img src="/assets/bio-img2.jpg" alt="logo" />
                <p>
                  <span>Tom Lorusso</span> | Xbox Principal User Research
                  Manager, Microsoft
                </p>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <img className="col-img" src="/assets/microsoft.png" alt="logo" />
            </Col>
          </Row>
        </div>
      </Slider>
    </Container>
  );
};

export default Reviews;
