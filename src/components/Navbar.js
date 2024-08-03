import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Se precisar de estilos específicos

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cadastro">Cadastro de Aluno</Link>
        </li>
        <li>
          <Link to="/listagem">Listagem de Alunos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
