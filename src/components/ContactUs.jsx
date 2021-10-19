import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Map from "../Images/Map.svg";
import Mail from "../Images/Mail.svg";
import ScreenContent from "../Images/Screencontent.png";
import Android from "../Images/Android.svg";
import TwitterBlue from "../Images/Twitterblue.svg";
import FacebookBlue from "../Images/Facebookblue.svg";
import LinkedinBlue from "../Images/Linkedinblue.svg";

export default function ContactUs() {
  return (
    <Container fluid className='contactusdiv'>
      <Row className='contactus'>
        <Container
          fluid
          style={{
            height: "801px",
            marginTop: "153px",
            textAlign: "center",
          }}>
          <Row>
            <Col>
              <h2>Contact Us</h2>
            </Col>
            <Row>
              <Col>
                <h4>
                  Most calendars are designed for teams.{" "}
                  <span className='spantxt'>
                    Slate is designed for freelancers
                  </span>
                </h4>
              </Col>
            </Row>
          </Row>
          <Row>
            <Col sm={6} className='contactform'>
              <h3 style={{ marginTop: "52px" }}>Contact Us </h3>
              <Form
                style={{ width: "353px", height: "549px", paddingTop: "40px" }}>
                <Form.Group className='mb-3' controlId='formGroupText'>
                  <Form.Control
                    type='text'
                    placeholder='Your Name'
                    style={{
                      borderRadius: "39px",
                      backgroundColor: "#F5F5F5",
                      width: "303px",
                      height: "44px",
                      marginLeft: "10px",
                    }}
                  />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formGroupEmail'>
                  <Form.Control
                    type='email'
                    placeholder='Your Email'
                    style={{
                      borderRadius: "39px",
                      backgroundColor: "#F5F5F5",
                      width: "303px",
                      height: "44px",
                      marginTop: "30px",
                      marginLeft: "10px",
                    }}
                  />
                </Form.Group>
                <Form.Control
                  as='textarea'
                  placeholder='Your Message'
                  style={{
                    width: "303px",
                    height: "153px",
                    backgroundColor: "#F5F5F5",
                    marginTop: "30px",
                    marginLeft: "10px",
                  }}
                />
                <Button
                  variant='primary'
                  style={{
                    width: "125px",
                    height: "56px",
                    marginRight: "208px",
                    padding: "18px 28 18px 28",
                    marginTop: "30px",
                    borderRadius: "35px",
                  }}>
                  Send
                </Button>
              </Form>
            </Col>
            <Col sm={6}>
              <Row className='infodiv'>
                <Col xs={6} style={{ textAlign: "center", width: "313px" }}>
                  <Row>
                    <Col>
                      <img src={Map} alt='map' className='mapimg'></img>
                    </Col>
                  </Row>
                  <Row>
                    <h5>
                      6386 Spring St undefined Anchorage, Georgia 12473 United
                      States
                    </h5>
                  </Row>
                </Col>
                <Col style={{ width: "137px" }}>
                  <Row>
                    <Col>
                      <Row>
                        <Col>
                          <img
                            src={Android}
                            alt='android'
                            style={{ width: "26px", height: "32px" }}></img>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <h5>(843) 555-0130</h5>
                  </Row>
                </Col>
                <Col style={{ width: "245px" }}>
                  <Row>
                    <Col>
                      <img
                        src={Mail}
                        alt='mail'
                        style={{ width: "26px", height: "32px" }}></img>
                    </Col>
                  </Row>
                  <Row>
                    <h5>willie.jennings@example.com</h5>
                  </Row>
                </Col>
              </Row>
              <Row
                style={{
                  width: "516px",
                  height: "343.19px",
                  paddingTop: "70px",
                  paddingLeft: "104px",
                }}>
                <Col>
                  <img
                    src={ScreenContent}
                    alt='screencontent'
                    className='screencontent'></img>
                </Col>
              </Row>
              <Row className='social'>
                <Col style={{ width: "40.99px", height: "40.99px" }}>
                  <img src={TwitterBlue} alt='twitterlogo'></img>
                </Col>
                <Col style={{ width: "40.99px", height: "40.99px" }}>
                  <img src={FacebookBlue} alt='facebooklogo'></img>
                </Col>
                <Col style={{ width: "40.99px", height: "40.99px" }}>
                  <img src={LinkedinBlue} alt='linkedinlogo'></img>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
}
