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
              'https://stackblitz.com/files/react-osu5rj/github/tomascoria/TP10-Tomi/master/perfil.jpg'
            }
          />
          <p>
            Actualmente estoy cursando el ultimo año de la escuela ORT en la orientacion informatica <br />
            En este momento me encuentro desarrollando un proyecto en el cual se basa en streaming de peliculas, lo llamativo de este proyecto es que podras ver peliculas con tu grupo de amigos en vivo. La pagina web se encuentra en desarrollo.
            <br />
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
