import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './NavBar.js';
import About from './About.js';
import Proyectos from './Proyectos.js';
import Contacto from './Contacto.js';

export default function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <NavBar />
          <div className="content">
            <Route exact path="/about" component={About} />
            <Route exact path="/proyectos" component={Proyectos} />
            <Route exact path="/contacto" component={Contacto} />
          </div>
        </div>
      </Router>
    </div>
  );
}
