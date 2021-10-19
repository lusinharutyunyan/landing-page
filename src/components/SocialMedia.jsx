import React from 'react';
import { Row,Col } from 'react-bootstrap';
import Facebook from "../Images/Facebook.png";
import Twitter from "../Images/twitter.png";
import Linkedin from "../Images/Linkedin.png";

export default function SocialMedia () {


    return (
      <Row
        style={{
          width: "190.96px",
          height: "40.99px",
          padding: "20px 0px 20px 0px",
        }}>
        <Col style={{ width: "33.31px", height: "27.06px" }}>
          <img src={Twitter} alt='twitter'></img>
        </Col>
        <Col style={{ width: "32.02px", height: "32.02px" }}>
          <img src={Facebook} alt='facebook'></img>
        </Col>
        <Col style={{ width: "32.02px", height: "32.02px" }}>
          <img src={Linkedin} alt='linkedin'></img>
        </Col>
      </Row>
    );
}