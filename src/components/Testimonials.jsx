import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ibmlogo from "../Images/ibm.svg";
import Client from "../Images/Client.png";

export default function Testimonials() {
  return (
    <Container
      fluid
      style={{
        textAlign: "center",
        height: "711px",
        marginTop: "190px",
      }}>
      <Row>
        <Col>
          <h2>Testimonials</h2>
        </Col>
      </Row>
      <Row>
        <Col lg={true} style={{ paddingTop: "60px" }}>
          <img src={ibmlogo} alt='IBMlogo' className='ibmlogo'></img>
        </Col>
      </Row>
      <Row>
        <Col lg={true} style={{ paddingTop: "50px" }}>
          <h4 className='clienttxt'>
            Most calendars are designed for teams. Slate is designed for
            freelancers who want a simple way to plan their schedule.
          </h4>
        </Col>
      </Row>
      <Row className='clientdiv'>
        <Col className="clientimg">
          <img src={Client} alt='client'></img>
        </Col>
        <Col className="aboutclient">
          <Row style={{ marginLeft: "-32px" }}>
            <h5>Organize across</h5>
          </Row>
          <Row>Ui designer</Row>
        </Col>
      </Row>
      <Row style={{ marginTop: "82px" }}>
        <Col>
          <Button
            variant='primary'
            className="moretestimonials"
         >
            More Testimonials
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
