import React from "react";
import { Col, Row, Container, Button } from "react-bootstrap";

export default function PricingStyle() {
  return (
    <Col
      lg={true}
      style={{
        width: "335px",
        height: "693px",
        top: "43px",
        padding: "10px",
        borderRadius: "10px",
        textAlign: "center",
        backgroundColor: "#2091F9",
      }}>
      <Container style={{ marginTop: "40px" }}>
        <Row>
          <h3 style={{ color: "white" }}>FREE</h3>
        </Row>
        <Row style={{paddingLeft:"73px"}}>
          <h6 style={{ color: " white", width: "148px", textAlign: "center", fontWeight:"400" }}>
            Organize across all apps by hand
          </h6>
        </Row>
      </Container>
      <Row
        xs={2}
        md={4}
        lg={6}
        style={{ color: "white", marginTop: "30px", marginLeft: "91px" }}>
        <Col>
          <h1 className='zero' style={{ color: "white" }}>
            0
          </h1>
        </Col>
        <Col style={{ width: "78px", height: "51px" }}>
          <Row>
            <h3
              style={{
                fontWeight: "bold",
                color: "white",
                fontSize: "20px",
              }}>
              $
            </h3>
          </Row>
          <Row>
            <h5
              style={{
                fontSize: "16px",
                fontWeight: "normal",
                color: "white",
              }}>
              Per Month
            </h5>
          </Row>
        </Col>
      </Row>
      <Row
        style={{
          color: "red",
          width: "255px",
          height: "240px",
          paddingLeft: "40px",
          margin: "30px 30px",
          textAlign: "center",
        }}>
        <Row>
          <Col
            style={{
              fontSize: "15px",
              fontWeight: "400",
              lineHeight: "28px",
              color: "white",
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
              color: "white",
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
              color: "white",
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
              color: "white",
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
              color: "white",
              marginTop: "10px",
            }}>
            Pricing Feature
          </Col>
        </Row>
      </Row>
      <Row>
        <Col>
          <Button
            style={{
              backgroundColor: "white",
              color: "#2091F9",
              borderRadius: "35px",
              width: "255px",
              height: "56px",
              marginTop: "40px",
              top: "14px",
              left: "285px",
              fontSize: "20px",
              lineHeight: "20px",
              fontWeight: "400",
              textAlign: "center",
              padding: "18px 38px 18px 38px",
            }}>
            Order Now
          </Button>
        </Col>
      </Row>
    </Col>
  );
}
