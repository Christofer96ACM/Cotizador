import React from 'react';
import Formulario from './Formulario';
import { Col, Row, Container } from 'reactstrap';

const inicio = `${process.env.PUBLIC_URL}/Imgs/Inicio.png`;

const Body = () => (
  <div className="Body">
    <Container className="Container">
      <Row>
        <Col sm={6} md={6}  style={{ backgroundColor: `#ECF0FF`, textAlign: `center`, height: `820px` }}>
          <div className="InicioIzq">
            <table className="table table-hover table-borderless" >
              <tbody>
                <tr>
                  <td>
                    <img src={inicio} />
                  </td>
                </tr>
                <tr>
                  <td className="InicioNuevo">
                    ¡NUEVO!
                  </td>
                </tr>
                <tr>
                  <td className="InicioSeguro">
                    <label className="Seguro">Seguro</label> Vehicular Tracking
                  </td>
                </tr>
                <tr>
                  <td className="InicioCuentanos">
                    Cuentanos donde le haras seguimiento a tu seguro
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
        <Col sm={6} md={6} style={{ float: `right`, display: `flex`, justifyContent: `space-around`, height: `820px`}}>
          <Formulario />
        </Col>
      </Row>
    </Container>
  </div>
);

export default Body;
