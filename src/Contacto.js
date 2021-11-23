import React from 'react';
import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import './style.css';

const Contacto = () => {
  const [datos, setDatos] = useState({
    nombre: '',
    mail: '',
    mensaje: '',
  });

  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = () => {
    alert('Sus datos fueron enviados con exito');
  };

  return (
    <div>
      <center>
        <h1>Contacto</h1>
        <form className="row" onSubmit={enviarDatos}>
          <div className="col-md-3">
            <input
              type="text"
              placeholder="Nombre"
              className="form-control"
              onChange={handleInputChange}
              name="nombre"
            ></input>
          </div>
          <div className="col-md-3">
            <input
              type="email"
              placeholder="Mail de contacto"
              className="form-control"
              onChange={handleInputChange}
              name="mail"
            ></input>
          </div>
          <div className="col-md-3">
            <textarea
              placeholder="Mensaje"
              className="form-control"
              onChange={handleInputChange}
              name="mensje"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
        <ul>
          <li>{datos.nombre}</li>
          <li>{datos.mail}</li>
        </ul>
      </center>
    </div>
  );
};
export default Contacto;
