import React from 'react';
import { Col, Row, Container,  } from 'reactstrap';
import Phone from 'mdi-react/PhoneIcon';

const marca = `${process.env.PUBLIC_URL}/Imgs/Logo.png`;

const Header = () => (
  <div className="Header">
    <Container className="Container">
      <Row>
        <Col sm={6} md={6} style={{ textAlign: `center` }}>
          <img src={marca} />
        </Col>
        <Col sm={6} md={6} style={{ float: `right`, display: `flex`, justifyContent: `space-around`}}>
          <div style={{ float: `right`, paddingRight: `30px` }}>¿Tienes alguna duda?</div>
          <div style={{ float: `right`, paddingLeft: `10px`, color:`#6F7DFF`}}><Phone color="#6F7DFF"/>  (01) 411 6001</div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Header;
