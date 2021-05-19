import React from 'react'
import { Col, Row, Container } from 'reactstrap';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';

const Landing = () => {
  return (
    <div className="coti_1">
      <Container>
        <Row>
          <Col>
            <Header />
            
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Landing;
