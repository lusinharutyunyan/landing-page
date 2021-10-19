import React from "react";
import { Container, Card, Button, Row, Col, Form } from "react-bootstrap";
import Undraw_newsletter from "../Images/Undraw_newsletter.png";

export default function CallToAction() {
  return (
    <Container style={{ marginTop: "44px" }}>
      <Card style={{ border: "none" }}>
        <Row>
          <Col xs={{ order: "last" }} md={{ order: "first" }}>
            <Card.Img src={Undraw_newsletter} />
          </Col>

          <Col xs={{ order: "first" }} md={{ order: "last" }}>
            <Card.Body style={{ paddingTop: "68px" }}>
              <Row className='headings'>
                <h3>At your fingertips</h3>
                <h2 className='newsletter'>Newsletter</h2>
                <h2 className='hideonxs'>Lightning fast prototyping </h2>
              </Row>

              <Card.Text style={{ paddingTop: "35px" }}>
                <h3>Subscribe to our Newsletter</h3>
                <p>Available exclusivery on Figmaland</p>
                <Row>
                  <Col>
                    <Form.Control
                      type='text'
                      placeholder='Your Email'
                     className="submitinput"
                      
                    />
                  </Col>
                  <Col className='submit'>
                    <Button
                      variant='primary'
                    className="submitbtn">
                      Subscribe
                    </Button>
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
