import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Se precisar de estilos específicos

function Home() {
  return (
    <div className="home">
      <h1>Bem-vindo à Página Inicial</h1>
      <nav>
        <ul>
          <li>
            <Link to="/cadastro">Cadastro de Aluno</Link>
          </li>
          <li>
            <Link to="/listagem">Listagem de Alunos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
