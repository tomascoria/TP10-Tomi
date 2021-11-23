import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import './style.css';

const Proyectos = () => {
  return (
    <div>
      <center>
        <h1>Proyectos</h1>
        <div className="card2">
          <div className="header">
            <p>Dummy API</p>
            <img
              className="imagen"
              src={
                'https://stackblitz.com/files/react-phgqov/github/guadi-torino/TP10/master/dummyapi.PNG'
              }
            />
            <div className="btn">
              <a href={'https://react-tc9tum.stackblitz.io'}>
                <p style={{ textDecoration: 'none' }}>Ver proyecto</p>
              </a>
            </div>
          </div>
        </div>
        <br />
        <div className="card2">
          <div className="header">
            <p> Administrador de pacientes</p>
            <img
              className="imagen"
              src={
                'https://stackblitz.com/files/react-phgqov/github/guadi-torino/TP10/master/administrador.PNG'
              }
            />
            <div className="btn">
              <a href={'https://react-gboejr.stackblitz.io'}>
                <p style={{ textDecoration: 'none' }}>Ver proyecto</p>
              </a>
            </div>
          </div>
        </div>
        <br />
        <div className="card2">
          <div className="header">
            <p> To do list</p>
            <img
              className="imagen"
              src={
                'https://stackblitz.com/files/react-phgqov/github/guadi-torino/TP10/master/todolist.PNG'
              }
            />
            <div className="btn">
              <a href={'https://todo-list-tomas.netlify.app/'}>
                <p style={{ textDecoration: 'none' }}>Ver proyecto</p>
              </a>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};
export default Proyectos;