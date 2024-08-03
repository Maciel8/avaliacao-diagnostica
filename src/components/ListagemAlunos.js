import React, { useState } from 'react';
import './ListagemAlunos.css'; // Se precisar de estilos específicos

function ListagemAlunos() {
  const [alunos, setAlunos] = useState([]);
  const [aluno, setAluno] = useState({ nome: 'Exemplo', idade: 20, email: 'exemplo@dominio.com' });

  // Função para adicionar um aluno de exemplo
  const adicionarAluno = () => {
    setAlunos([...alunos, aluno]);
    setAluno({ nome: '', idade: '', email: '' }); // Limpar os dados após adicionar
  };

  return (
    <div className="listagem-alunos">
      <h1>Listagem de Alunos</h1>
      {alunos.length > 0 ? (
        <ul>
          {alunos.map((aluno, index) => (
            <li key={index}>
              <p><strong>Nome:</strong> {aluno.nome}</p>
              <p><strong>Idade:</strong> {aluno.idade}</p>
              <p><strong>Email:</strong> {aluno.email}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum aluno cadastrado.</p>
      )}
      <button onClick={adicionarAluno}>
        Adicionar Aluno Exemplo
      </button>
    </div>
  );
}

export default ListagemAlunos;
