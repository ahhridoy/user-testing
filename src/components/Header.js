import React from "react";
import { Container } from "react-bootstrap";
import "../styles/imports/_imports.scss";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* <Container> */}
        <div className="container-fluid">
        <a className="navbar-brand" href="#">
          User Testing
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Solutions
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className="solutions-tab">
                  <div>
                    <h5>Teams</h5>
                    <li>
                      <a href="#">Executives</a>
                    </li>
                    <li>
                      <a href="#">Marketing</a>
                    </li>
                    <li>
                      <a href="#">Product</a>
                    </li>
                    <li>
                      <a href="#">Design</a>
                    </li>
                    <li>
                      <a href="#">UX leaders</a>
                    </li>
                    <li>
                      <a href="#">UX researchers</a>
                    </li>
                  </div>
                  <div>
                    <h5>Capabilities</h5>
                    <li>
                      <a href="#">Integrations and plugins</a>
                    </li>
                    <li>
                      <a href="#">Mobile testing</a>
                    </li>
                    <li>
                      <a href="#">Pro services</a>
                    </li>
                    <li>
                      <a href="#">Templates</a>
                    </li>
                  </div>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Platform
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className="features-tab">
                  <div>
                    <h5>Features</h5>
                    <li>
                      <a href="#">Platform overview</a>
                    </li>
                    <li>
                      <a href="#">Plans</a>
                    </li>
                  </div>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Company
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className="company-tab">
                  <div>
                    <h5>About UserTesting</h5>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Executive team</a>
                    </li>
                    <li>
                      <a href="#">Investor relations</a>
                    </li>
                    <li>
                      <a href="#">Newsroom</a>
                    </li>
                    <li>
                      <a href="#">Partners</a>
                    </li>
                  </div>
                  <div>
                    <h5>Careers at UserTesting</h5>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">Inclusion and diversity</a>
                    </li>
                  </div>
                  <div>
                    <h5>Initiatives and programs</h5>
                    <li>
                      <a href="#">Charitable giving</a>
                    </li>
                    <li>
                      <a href="#">Customer research program</a>
                    </li>
                    <li>
                      <a href="#">Education program</a>
                    </li>
                    <li>
                      <a href="#">OneWorld</a>
                    </li>
                    <li>
                      <a href="#">UserTested</a>
                    </li>
                  </div>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Resources
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className="resource-tab">
                  <div>
                    <h5>Digital resources</h5>
                    <li>
                      <a href="#">All resources</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Customer stories</a>
                    </li>
                    <li>
                      <a href="#">Ebooks</a>
                    </li>
                    <li>
                      <a href="#">Events</a>
                    </li>
                    <li>
                      <a href="#">Industry reports</a>
                    </li>
                    <li>
                      <a href="#">Podcasts</a>
                    </li>
                    <li>
                      <a href="#">Template gallery</a>
                    </li>
                    <li>
                      <a href="#">Webinars</a>
                    </li>
                    <li>
                      <a href="#">Whitepapers</a>
                    </li>
                  </div>
                  <div>
                    <h5>Training and forums</h5>
                    <li>
                      <a href="#">UserTesting University</a>
                    </li>
                    <li>
                      <a href="#">UserTesting CommUnity</a>
                    </li>
                  </div>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact us
              </a>
            </li>
          </ul>

          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Search
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                EN
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className="features-tab">
                  <div>
                    <li>
                      <a href="#">English</a>
                    </li>
                  </div>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Get paid to test
              </a>
            </li>
          </ul>
          <button type="button" className="btn btn-outline-primary">Request trail</button>
        </div>
        </div>
      {/* </Container> */}
    </nav>
  );
};

export default Header;
