import React from 'react'
import { Col, Row, Container } from 'reactstrap';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import Body from './Componentes/Body';

const Landing = () => {
  return (
    <div className="coti_1">
      <Container>
        <Row>
          <Col>
            <Header />
            <Body />
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Landing;
