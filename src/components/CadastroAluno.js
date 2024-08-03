import React, { useState } from 'react';
import './CadastroAluno.css'; // Se precisar de estilos específicos

function CadastroAluno() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [email, setEmail] = useState('');
  const [aluno, setAluno] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAluno({ nome, idade, email });
    setNome('');
    setIdade('');
    setEmail('');
  };

  return (
    <div className="cadastro-aluno">
      <h1>Cadastro de Aluno</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Idade:
          <input
            type="number"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Cadastrar</button>
      </form>
      {aluno && (
        <div className="aluno-dados">
          <h2>Dados do Aluno</h2>
          <p><strong>Nome:</strong> {aluno.nome}</p>
          <p><strong>Idade:</strong> {aluno.idade}</p>
          <p><strong>Email:</strong> {aluno.email}</p>
        </div>
      )}
    </div>
  );
}

export default CadastroAluno;
