import React from "react";
import { Col, Row, Container, Button } from "react-bootstrap";

export default function PricingStyle() {
  return (
    <Col
      lg={true}
      style={{
        color: "white",
        width: "335px",
        height: "607px",
        marginTop: "43px",
        padding: "10px",
        borderRadius: "10px",
        backgroundColor: "white",
        textAlign: "center",
      }}>
      <Container style={{ marginTop: "40px" }}>
        <Row>
          <h3 style={{ color: "#252B42" }}>FREE</h3>
        </Row>
        <Row style={{ paddingLeft: "73px" }}>
          <h6
            style={{
              color: " #374754",
              width: "148px",
              textAlign: "center",
              fontWeight: "400",
            }}>
            Organize across all apps by hand
          </h6>
        </Row>
      </Container>
      <Row
        xs={2}
        md={4}
        lg={6}
        style={{ color: "black", marginTop: "30px", marginLeft: "91px" }}>
        <Col style={{ color: "black" }}>
          <h1 className='zero'>0</h1>
        </Col>
        <Col className='price'>
          <Row>
            <h3
              style={{
                fontWeight: "bold",
                color: "#252B42",
                fontSize: "20px",
              }}>
              $
            </h3>
          </Row>
          <Row>
            <h5 style={{ fontSize: "16px", fontWeight: "normal" }}>
              Per Month
            </h5>
          </Row>
        </Col>
      </Row>
      <Row
        style={{
          width: "255px",
          height: "240px",
          margin: "15px",
          paddingLeft: "40px",
          textAlign: "center",
        }}>
        <Row>
          <Col
            style={{
              fontSize: "15px",
              fontWeight: "400",
              lineHeight: "28px",
              color: "#252B42",
              marginTop: "10px",
            }}>
            Pricing Feature
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              fontSize: "15px",
              fontWeight: "400",
              lineHeight: "28px",
              color: "#252B42",
              marginTop: "10px",
            }}>
            Pricing Feature
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              fontSize: "15px",
              fontWeight: "400",
              lineHeight: "28px",
              color: "#252B42",
              marginTop: "10px",
            }}>
            Pricing Feature
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              fontSize: "15px",
              fontWeight: "400",
              lineHeight: "28px",
              color: "#252B42",
              marginTop: "10px",
            }}>
            Pricing Feature
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              fontSize: "15px",
              fontWeight: "400",
              lineHeight: "28px",
              color: "#252B42",
              marginTop: "10px",
            }}>
            Pricing Feature
          </Col>
        </Row>
      </Row>
      <Row>
        <Col>
          <Button
            variant='primary'
            style={{
              borderRadius: "35px",
              width: "255px",
              height: "56px",
              padding: "18px 38px 18px 38px",
              top: "14px",
              left: "285px",
              fontSize: "20px",
              lineHeight: "20px",
              fontWeight: "400",
              textAlign: "center",
            }}>
            Order Now
          </Button>
        </Col>
      </Row>
    </Col>
  );
}
