import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import MacbookPro from "../Images/MacbookPro.png";

export default function Hero() {
  return (
    <Container fluid className='hero'>
      <Row>
        <Col>
          <h2 className='secondheadingtxt'>Fastest way to organize</h2>
          <h4 className='secondmdtext'>
            Most calendars are designed for teams.
            <span className='spantxt'>Slate is designed for freelancers</span>
          </h4>
          <div className='btndiv'>
            <Button variant='primary' className='tryforfree'>
              Try For Free
            </Button>
          </div>
        </Col>
        <Col sm={6}>
          <div className='macpng'>
            <Image src={MacbookPro} className='macimg'></Image>
          </div>
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
}
