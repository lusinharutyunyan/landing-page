import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PricingStyle from "./PricingStyle";
import PricingStyleContrast from "./PricingStyleContrast";

export default function Pricing() {
  return (
    <Container fluid className='pricing'>
      <Container style={{ width: "552px", height: "182px" }}>
        <Row>
          <Col className='pricingtxt'>
            <h2 className='pricingh2'>Pricing</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 className='pricingh4'>
              Most calendars are designed for teams.{" "}
              <span className='spantxt'>Slate is designed for freelancers</span>
            </h4>
          </Col>
        </Row>
      </Container>

      <Container style={{ paddingTop: "90px" }}>
        <Row className="pricingstyles">
          <Col lg={true}>
            <PricingStyle />
          </Col>
          <Col lg={true} className="pricingstylecontrast">
            <PricingStyleContrast />
          </Col>
          <Col lg={true}>
            <PricingStyle />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
