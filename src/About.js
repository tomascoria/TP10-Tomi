import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import './style.css';

const About = () => {
  return (
    <div>
      <center>
        <h1>About</h1>

        <div className="about">
          <img
            className="perfil"
            src={
              'https://stackblitz.com/files/react-phgqov/github/guadi-torino/TP10/master/foto.png'
            }
          />
          <p>
            Estoy cursando el último año del nivel secundario con orientación en
            Informática en Ort. <br />
            Soy emprendedora social, participo en proyectos creando herramientas
            para la inclusión social y escolar de personas con discapacidad.{' '}
            <br />
            Soy mentora en una organización que tiene como fin achicar la brecha
            de género en el ambiente tecnológico brindando talleres y charlas a
            jóvenes.
            <br /> Considero que desarrollar aptitudes como la comunicación,
            flexibilidad, creatividad y trabajo en equipo son necesarias para
            las características del contexto actual.
          </p>
          <div className="btn">
          <Link to="/proyectos">
            <p style={{ textDecoration: 'none' }}>Ver proyectos</p>
          </Link>
        </div>
        </div>
      </center>
    </div>
  );
};
export default About;
