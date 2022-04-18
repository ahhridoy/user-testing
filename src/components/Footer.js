import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container>
      <h1 className="text-light text-center fs-3 py-4">User Testing</h1>
      <h1 className="heading">Real. Human. Insight.</h1>
      <hr />
      <Row>
        <Col md={2} xs={6}>
          <p className="sub-text">UserTesting</p>
          <hr />
          <p>
            <a href="#">Login</a>
          </p>
          <p>
            <a href="#">Get paid to test</a>
          </p>
          <p>
            <a href="#">Contact us</a>
          </p>
          <p>
            <a href="#">1 (888) 877‒1882</a>
          </p>
          <hr />
          <p className="sub-text">Social Channels</p>
          <a
            href="https://www.facebook.com/UserTestingcom/"
            target="_blank"
            rel="noreferer, noopener"
          >
            <img
              src="/themes/custom/usertestingv2/assets/icons/footer-facebook.svg"
              class="text-white followus-block__image"
              alt="FaceBook"
            />
          </a>
          <hr />
          <p className="sub-text">Languages</p>
          <p>
            <a href="#">English</a>
          </p>
          <p>
            <a href="#">German</a>
          </p>
        </Col>
        <Col md={2} xs={6}>
          <p className="sub-text">Solutions</p>
          <hr />
          <p className="sub-text">Team solutions</p>
          <p>
            <a href="#">Executives</a>
          </p>
          <p>
            <a href="#">Marketing teams</a>
          </p>
          <p>
            <a href="#">Product and design</a>
          </p>
          <p>
            <a href="#">UX leaders</a>
          </p>
          <p>
            <a href="#">UX researchers</a>
          </p>
          <hr />
          <p className="sub-text">Capabilities</p>
          <p>
            <a href="#">Integrations and plugins</a>
          </p>
          <p>
            <a href="#">Mobile testing</a>
          </p>
          <p>
            <a href="#">Pro services</a>
          </p>
          <p>
            <a href="#">Templates</a>
          </p>
        </Col>
        <Col md={2} xs={6}>
          <p className="sub-text">Platform</p>
          <hr />
          <p className="sub-text">Platform overview</p>
          <p>
            <a href="#">Human insight platform</a>
          </p>
          <hr />
          <p className="sub-text">Getting started</p>
          <p>
            <a href="#">Plans</a>
          </p>
        </Col>
        <Col md={2} xs={6}>
          <p className="sub-text">Company</p>
          <hr />
          <p className="sub-text">About UserTesting</p>
          <p>
            <a href="#">About us</a>
          </p>
          <p>
            <a href="#">Executive team</a>
          </p>
          <p>
            <a href="#">Press</a>
          </p>
          <p>
            <a href="#">Investor relations</a>
          </p>
          <hr />
          <p className="sub-text">Careers at UserTesting</p>
          <p>
            <a href="#">Careers</a>
          </p>
          <p>
            <a href="#">Diversity and inclusion</a>
          </p>
          <hr />
          <p className="sub-text">Giving back</p>
          <p>
            <a href="#">Charitable giving program</a>
          </p>
          <p>
            <a href="#">Education partner</a>
          </p>
          <p>
            <a href="#">program</a>
          </p>
          <p>
            <a href="#">OneWorld</a>
          </p>
        </Col>
        <Col md={2} xs={6}>
          <p className="sub-text">Resources</p>
          <hr />
          <p className="sub-text">Digital resources</p>
          <p>
            <a href="#">All resources</a>
          </p>
          <p>
            <a href="#">Blog</a>
          </p>
          <p>
            <a href="#">Customers</a>
          </p>
          <p>
            <a href="#">Ebooks</a>
          </p>
          <p>
            <a href="#">Events</a>
          </p>
          <p>
            <a href="#">Human insight</a>
          </p>
          <p>
            <a href="#">Industry reports</a>
          </p>
          <p>
            <a href="#">Podcasts</a>
          </p>
          <p>
            <a href="#">Template gallery</a>
          </p>
          <p>
            <a href="#">Webinars</a>
          </p>
          <p>
            <a href="#">Whitepapers</a>
          </p>
          <hr />
          <p className="sub-text">Additional resources and information</p>
          <p>
            <a href="#">UserTesting CommUnity</a>
          </p>
          <p>
            <a href="#">UserTesting University</a>
          </p>
        </Col>
        <Col md={2} xs={6}>
          <p className="sub-text">Support</p>
          <hr />
          <p className="sub-text">Trust Center</p>
          <p>
            <a href="#">Cookie policy</a>
          </p>
          <hr />
          <p className="sub-text">Legal</p>
          <p>
            <a href="#">Privacy center</a>
          </p>
          <p>
            <a href="#">Contributor help</a>
          </p>
          <p>
            <a href="#">Customer terms</a>
          </p>
          <p>
            <a href="#">Anti-Corruption policy</a>
          </p>
          <p>
            <a href="#">Export overview</a>
          </p>
          <p>
            <a href="#">Customer help</a>
          </p>
          <hr />
          <p className="sub-text">Other</p>
          <p>
            <a href="#">Bug bounty</a>
          </p>
        </Col>
      </Row>
      <div className="bottom">
      <span >© UserTesting 2022</span>
      </div>
    </Container>
  );
};

export default Footer;
