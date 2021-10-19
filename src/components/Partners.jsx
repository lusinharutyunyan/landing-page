import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Google from "../Images/Logos_google.svg";
import Amazon from "../Images/Logos_amazon.png";
import Microsoft from "../Images/Logos_microsoft.png";
import Uber from "../Images/Logos_uber.png";
import Dropbox from "../Images/Logos_dropbox.png";

export default function Partners() {
  return (
    <Container fluid style={{ marginTop: "130px" }}>
      <Row style={{ textAlign: "center" }}>
        <Col>
          <h2>Partners</h2>
        </Col>
      </Row>
      <Row
        style={{
          textAlign: "center",
          paddingTop: "27px",
        }}>
        <Col>
          <h4>
            Most calendars are designed for teams. Slate is designed for
            freelancers
          </h4>
        </Col>
      </Row>
      <Container style={{ paddingTop: "90px" }}>
        <Row>
          <Col
            lg={true}
            style={{
              border: "1px solid #D8D8D8",
              padding: "31px 40px 31px 40px",
              top: "1px",
              textAlign: "center",
            }}>
            <h5>Client Name</h5>
            <img src={Google} alt='GoogleLogo'></img>
          </Col>
          <Col
            lg={true}
            style={{
              border: "1px solid #D8D8D8",
              padding: "31px 40px 31px 40px",
              top: "1px",
              textAlign: "center",
            }}>
            <h5>Client Name</h5>
            <img src={Amazon} alt='AmazonLogo'></img>
          </Col>
          <Col
            lg={true}
            style={{
              border: "1px solid #D8D8D8",
              padding: "31px 40px 31px 40px",
              top: "1px",
              textAlign: "center",
            }}>
            <h5>Client Name</h5>
            <img src={Microsoft} alt='MicrosoftLogo'></img>
          </Col>
          <Col
            lg={true}
            className='hide'
            style={{
              border: "1px solid #D8D8D8",
              padding: "31px 40px 31px 40px",
              top: "1px",
              textAlign: "center",
            }}>
            <h5>Client Name</h5>
            <img src={Uber} alt='UberLogo'></img>
          </Col>
        </Row>
        <Row>
          <Col
            lg={true}
            className='hide'
            style={{
              border: "1px solid #D8D8D8",
              padding: "31px 40px 31px 40px",
              top: "1px",
              textAlign: "center",
            }}>
            <h5>Client Name</h5>
            <img src={Dropbox} alt='DropboxLogo'></img>
          </Col>
          <Col
            lg={true}
            className='hide'
            style={{
              border: "1px solid #D8D8D8",
              padding: "31px 40px 31px 40px",
              top: "1px",
              textAlign: "center",
            }}>
            <h5>Client Name</h5>
            <img src={Google} alt='GoogleLogo'></img>
          </Col>
          <Col
            lg={true}
            className='hide'
            style={{
              border: "1px solid #D8D8D8",
              padding: "31px 40px 31px 40px",
              top: "1px",
              textAlign: "center",
            }}>
            <h5>Client Name</h5>
            <img src={Uber} alt='UberLogo'></img>
          </Col>
          <Col
            lg={true}
            className='hide'
            style={{
              border: "1px solid #D8D8D8",
              padding: "31px 40px 31px 40px",
              top: "1px",
              textAlign: "center",
            }}>
            <h5>Client Name</h5>
            <img src={Amazon} alt='AmazonLogo'></img>
          </Col>
        </Row>
        <Row style={{ textAlign: "center", paddingTop: "80px" }}>
          <Col>
            <Button variant='primary' className='tryforfree'>
              Try For Free
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
