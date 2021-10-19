import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import Mapwhite from "../Images/Mapwhite.svg";
import Androidwhite from "../Images/Androidwhite.svg";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <Container fluid className='footer'>
      <Container className='footercontainer'>
        <Row>
          <Col xs={12} md={3} className='footeritems'>
            <Row>
              <Col>
                <h3 className='footerh3'>Pages</h3>
              </Col>
            </Row>
            <Nav defaultActiveKey='/home' className='flex-column'>
              <Nav.Link
                href='/home'
                style={{ color: "white", fontSize: "15px" }}>
                Home
              </Nav.Link>
              <Nav.Link style={{ color: "white", fontSize: "15px" }}>
                Product
              </Nav.Link>
              <Nav.Link style={{ color: "white", fontSize: "15px" }}>
                Pricing
              </Nav.Link>
              <Nav.Link style={{ color: "white", fontSize: "15px" }}>
                About
              </Nav.Link>
              <Nav.Link style={{ color: "white", fontSize: "15px" }}>
                Contact
              </Nav.Link>
            </Nav>
          </Col>

          <Col xs={12} md={3} className='footeritems'>
            <Row>
              <Col>
                <h3 style={{ color: "white" }}>Tomothy</h3>
              </Col>
            </Row>
            <Nav
              defaultActiveKey='/home'
              className='flex-column'
              style={{ height: "204px" }}>
              <Nav.Link style={{ color: "white", fontSize: "15px" }}>
                Eleanor Edwards
              </Nav.Link>
              <Nav.Link style={{ color: "white", fontSize: "15px" }}>
                Ted Robertson
              </Nav.Link>
              <Nav.Link style={{ color: "white", fontSize: "15px" }}>
                Annette Russell
              </Nav.Link>
              <Nav.Link style={{ color: "white", fontSize: "15px" }}>
                Jennie Mckinney
              </Nav.Link>
              <Nav.Link style={{ color: "white", fontSize: "15px" }}>
                Gloria Richards
              </Nav.Link>
            </Nav>
          </Col>
          <Col xs={12} md={3} className='footeritems'>
            <Row>
              <Col>
                <h3 style={{ color: "white" }}>Jane Black</h3>
              </Col>
            </Row>
            <Nav defaultActiveKey='/home' className='flex-column'>
              <Nav.Link style={{ color: "white" }}>Philip Jones </Nav.Link>
              <Nav.Link style={{ color: "white" }}>Product</Nav.Link>
              <Nav.Link style={{ color: "white" }}>Colleen Russell</Nav.Link>
              <Nav.Link style={{ color: "white" }}> Marvin Hawkins</Nav.Link>
              <Nav.Link style={{ color: "white" }}>Bruce Simmmons </Nav.Link>
            </Nav>
          </Col>
          <Col md={3}>
            <Row className='footeritem'>
              <Col sm={4}>
                <img
                  src={Mapwhite}
                  style={{ color: "white" }}
                  alt='mapslogo'></img>
              </Col>
              <Col sm={8}>
                <a href='#info'>7480 Mockingbird Hill undefined </a>
              </Col>
            </Row>
            <Row className='footeritem'>
              <Col sm={4}>
                <img src={Androidwhite} alt='android'></img>
              </Col>
              <Col sm={8}>
                <a href='#phone'>(239) 555-0108</a>
              </Col>
            </Row>
            <Row className='socialfooter'>
              <Col>
                <SocialMedia />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
