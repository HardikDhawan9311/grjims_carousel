import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="mt-auto"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        color: "#fff",
        width: "100%",
        padding: "20px 0",
      }}
    >
      <Container>
        <Row className="justify-content-between">
          <Col md={6} xs={12} className="text-center text-md-start">
            <h1
              style={{
                fontFamily: "Arial Narrow, sans-serif",
                fontSize: "3rem",
                fontWeight: "bold",
              }}
            >
              GEEK ROOM JIMS
            </h1>
            <h4
              style={{
                fontFamily: "Bahnschrift Light, sans-serif",
                fontSize: "1.5rem",
                marginTop: "10px",
              }}
            >
              <span style={{ marginRight: 10 }}>Learn</span>
              <span style={{ marginRight: 10 }}>Connect</span>
              <span>Grow</span>
            </h4>
          </Col>
          <Col
            md={2}
            xs={12}
            className="text-center text-md-start mt-4 mt-md-0"
          >
            <h4
              style={{
                fontFamily: "Bahnschrift Light, sans-serif",
                fontSize: "1.5rem",
              }}
            >
              Links
            </h4>
            <ul className="list-unstyled">
              <li>
                <a
                  href="/"
                  style={{ color: "#eaece5", textDecoration: "none" }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/"
                  style={{ color: "#eaece5", textDecoration: "none" }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/"
                  style={{ color: "#eaece5", textDecoration: "none" }}
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/"
                  style={{ color: "#eaece5", textDecoration: "none" }}
                >
                  Achievements
                </a>
              </li>
              <li>
                <a
                  href="/"
                  style={{ color: "#eaece5", textDecoration: "none" }}
                >
                  Hackathons
                </a>
              </li>
            </ul>
          </Col>
          <Col
            md={3}
            xs={12}
            className="text-center text-md-start mt-4 mt-md-0"
          >
            <h4
              style={{
                fontFamily: "Bahnschrift Light, sans-serif",
                fontSize: "1.5rem",
              }}
            >
              Contact Us
            </h4>
            <p
              style={{
                fontFamily: "Bahnschrift Light, sans-serif",
                fontSize: "1rem",
                color: "#eaece5",
                textAlign: "justify",
              }}
            >
              Jagan Institute of Management Studies Technical Campus- JIMS
              Rohini 3 Near Rithala Metro Station, Rohini Sector 5,
              Institutional Area, New Delhi, Delhi 110085
            </p>
            <div className="d-flex justify-content-center justify-content-md-start">
              <a href="https://www.linkedin.com/" className="me-3">
                <FaLinkedin
                  style={{
                    color: "HighlightText",
                    strokeWidth: "2px",
                    width: "20px",
                    height: "20px",
                  }}
                />
              </a>
              <a href="https://www.instagram.com/" className="me-3">
                <FaInstagram
                  style={{
                    color: "HighlightText",
                    strokeWidth: "2px",
                    width: "20px",
                    height: "20px",
                  }}
                />
              </a>
              <a href="https://www.twitter.com/">
                <FaTwitter
                  style={{
                    color: "HighlightText",
                    strokeWidth: "2px",
                    width: "20px",
                    height: "20px",
                  }}
                />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <h4
              style={{
                fontFamily: "Bahnschrift Light, sans-serif",
                fontSize: "1rem",
                color: "#eaece5",
              }}
            >
              {/* &copy; 2024 Copyright: GeekRoomJims.in */}
            </h4>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
