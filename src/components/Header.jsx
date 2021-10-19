import React from "react";
import {
  Row,
  Container,
  Col,
  Figure,
  Nav,
  Navbar,
  Button,
} from "react-bootstrap";
import Rectangle from "../Images/Rectangle.png";
import RectangleLogo from "../Images/RectangleLogo.png";
import SocialMedia from "./SocialMedia";
import Menu from "../Images/menu.svg";

export default function Main() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Figure className='figure1'>
            <Figure.Image src={Rectangle} className='figureimg1'></Figure.Image>
            <figcaption>
              <Row style={{ paddingTop: "33.5px", paddingLeft: "83px" }}>
                <Col xs={6} md={4}>
                  <Navbar>
                    <Container>
                      <Nav className='me-auto ' style={{ paddingLeft: "40px" }}>
                        <Nav.Link href='#home' className='text-white'>
                          Home
                        </Nav.Link>
                        <Nav.Link href='#product' className='text-white'>
                          Product
                        </Nav.Link>
                        <Nav.Link href='#pricing' className='text-white'>
                          Pricing
                        </Nav.Link>
                        <Nav.Link href='#about' className='text-white'>
                          About
                        </Nav.Link>
                        <Nav.Link href='#contact' className='text-white'>
                          Contact
                        </Nav.Link>
                      </Nav>
                    </Container>
                  </Navbar>
                </Col>
                <Col
                  md={4}
                  sm={6}
                  style={{ paddingLeft: "20px" }}
                  className='figmalogo'>
                  <img src={RectangleLogo} alt='logo'></img>
                </Col>
                <Col className='menu' sm={6}>
                  <img src={Menu} alt='menu'></img>
                </Col>
                <Col xs={6} md={4} className='socialmedia'>
                  <SocialMedia />
                </Col>
              </Row>
            </figcaption>
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <h1 className='h1txt'>
                  The best products <br></br>start with Figma
                </h1>
              </Col>
            </Row>
            <Row className='justify-content-md-center'>
              <Col style={{ textAlign: "center", width: "766px" }}>
                <h4 className='mdtext'>
                  Most calendars are designed for teams.
                  <span className='spantxt'>
                    Slate is designed for freelancers
                  </span>
                </h4>
              </Col>
            </Row>
            <Row>
              <Col style={{ textAlign: "center", marginLeft: "20px" }}>
                <Button variant='primary' className='button'>
                  Try For Free
                </Button>
              </Col>
            </Row>
          </Figure>
        </Col>
      </Row>
    </Container>
  );
}
