import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import Phone from 'mdi-react/PhoneIcon';

const marca = `${process.env.PUBLIC_URL}/Imgs/Logo.png`;

const Header = () => (
  <div className="Header">
    <Container>
      <Row>
        <Col>
          <div className="Header_Logo">
            <img src={marca} />
          </div>
          <div className="Header_Texto">
              <div style={{ color: `#676F8F`, float: `left`, paddingLeft: `30px`, paddingTop: `10px` }}>¿Tienes alguna duda?</div>
              <Phone color="#6F7DFF" style={{ float: `left`, paddingLeft: `180px`, paddingTop: `7px` }}/>
              <div style={{ color: `#6F7DFF`, float: `left`, paddingLeft: `5px`, paddingTop: `10px` }}>(01) 411 6001</div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Header;