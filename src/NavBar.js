import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link className="linkhome" to="/about">
        About
      </Link>
      <Link className="linklista" to="/proyectos">
        Proyectos
      </Link>
      <Link className="linklista" to="/contacto">
        Contacto
      </Link>
    </nav>
  );
};
export default NavBar;
