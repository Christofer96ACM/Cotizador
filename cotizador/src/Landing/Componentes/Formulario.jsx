import React, {useState} from 'react';
import { Button, Form } from 'reactstrap';
import { dni, ruc, carnetextranjeria, celularreg, placareg } from '../../Validation/ExpReg';

const Formulario = () => {

  const [band, setBand] = useState(false)
  const [error, setError] = useState(0)
  const [data, setData] = useState({
    documento: '0',
    nrodocumento: '',
    celular: '',
    placa: '',
  });
  const {documento, nrodocumento, celular, placa} = data;
  const aceptarPolitica = () => {
    setBand(!band);
  };
  const getData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    // if(documento == 2 && nrodocumento.length >= 12){
    //   alert('Carnet de Extranjeria tiene solo 12 dígitos.');
    // }
    // else if(documento == 1 && nrodocumento.length >= 11){
    //   alert('RUC tiene solo 11 dígitos.');
    // }
    // else if(documento == 0 && nrodocumento.length >= 8){
    //   alert('DNI tiene solo 8 dígitos.');
    // }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(`${documento} - ${nrodocumento} - ${celular} - ${placa}`);
    // console.log(data);
    // console.log(error);
    console.log(!dni.test(nrodocumento));
    if (nrodocumento.trim() === '' || celular.trim() === '' || placa.trim() === '') {
      setError(1);
      console.log(error);
      return;
    }
    if (documento == '0' && !dni.test(nrodocumento) || (documento == '0' && nrodocumento.length > 8)) {
        setError(2);
        console.log(error);
        return;
    }
    if (documento == '1' && !ruc.test(nrodocumento) || (documento == '1' && nrodocumento.length > 11)) {
        setError(2);
        console.log(error);
        return;
    }
    if (documento == '2' && !carnetextranjeria.test(nrodocumento)  || (documento == '2' && nrodocumento.length > 11)) {
        setError(2);
        console.log(error);
        return;
    }
    if (!celularreg.test(celular) || celular.length > 9) {
        setError(3);
        console.log(error);
        return;
    }
    if (!placareg.test(placa) || placa.length > 6) {
        setError(4);
        console.log(error);
        return;
    }
    else{
      setError(0);
      console.log(error);
    }
    console.log(error);
  };

  return (
  <div className="Formulario">
    <Form onSubmit={onSubmit}>
      {error == 1 ? 
        <div className="alert alert-danger" role="alert">
          Todos los campos son Obligatorios.
        </div>
        :error == 2 ? 
          <div className="alert alert-danger" role="alert">
            Error en Nro de Documento.
          </div>
          :error == 3 ? 
            <div className="alert alert-danger" role="alert">
              Error al digitar el Celular.
            </div>
            : error == 4 ? 
              <div className="alert alert-danger" role="alert">
                Error al digitar la Placa.
              </div>
              : null}
        <table className="table table-borderless">
          <thead>
            <tr>
                <td className="InicioDatos">Déjanos tus Datos</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <table>
                  <tr>
                    <td>
                      <select className="form-select form-select-lg" name="documento" value={documento} onChange={getData}>
                        <option selected value={0}>DNI</option>
                        <option value={1}>RUC</option>
                        <option value={2}>Carnet Extranjeria</option>
                      </select>
                    </td>
                    <td>
                      <input className="form-control form-control-lg" type="text" name="nrodocumento" value={nrodocumento}
                      onChange={getData} placeholder="Nro. de doc" aria-label="default input example"/>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <input className="form-control form-control-lg" type="text" placeholder="Celular" 
                name="celular" value={celular} onChange={getData} aria-label="default input example"/>
              </td>
            </tr>
            <tr>
              <td>
                <input className="form-control form-control-lg" type="text" placeholder="Placa" 
                name="placa" value={placa} onChange={getData} aria-label="default input example"/>
                </td>
            </tr>
            <tr className="InicioPolitica">
              <td>
                <table>
                  <tr>
                    <td>
                      <input type="checkbox" className="form-check-input" id="Check" 
                      onChange={aceptarPolitica} />
                    </td>
                    <td className="Politica">
                      Acepto la Política de Protecciòn de Datos Personales y los Términos y Condiciones.
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td><Button className="btn-lg" color="danger" type="submit">Cotízalo</Button></td>
            </tr>
          </tbody>
        </table>
    </Form>
  </div>
  );
};

export default Formulario;
