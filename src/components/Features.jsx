import React from "react";
import { Col, Container, Row, Image, Figure } from "react-bootstrap";
import Vector1 from "../Images/Vector1.svg";
import Draw from "../Images/Draw.svg";
import Vector3 from "../Images/Vector3.svg";
import Screen from "../Images/Screen.png";
import PlayButton from "../Images/PlayButton.svg";

export default function Features() {
  return (
    <Container fluid className='featurescontainer'>
      <Row>
        <Col>
          <h2 className='featurestxt'>Features</h2>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h4 className='secondmdtext' style={{ textAlign: "center" }}>
            Most calendars are designed for teams. Slate is designed for
            freelancers
          </h4>
        </Col>
      </Row>
      <div className='features'>
        <Row>
          <Col lg={true}>
            <Image src={Vector1}></Image>
            <h3>OpenType features Variable fonts</h3>
            <p>
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </p>
          </Col>
          <Col lg={true}>
            <Image src={Draw}></Image>
            <h3>Design with real data</h3>
            <p>
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </p>
          </Col>
          <Col lg={true}>
            <Image src={Vector3}></Image>
            <h3>Fastest way to take action</h3>
            <p>
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </p>
          </Col>
        </Row>
      </div>
      <Row>
        <Col>
          <Figure className='videoscreen'>
            <Figure.Image src={Screen}></Figure.Image>
            <Figure.Image src={PlayButton} className='playbtn'></Figure.Image>
          </Figure>
        </Col>
      </Row>
    </Container>
  );
}
