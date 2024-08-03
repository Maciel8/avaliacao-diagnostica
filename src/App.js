import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CadastroAluno from './components/CadastroAluno';
import ListagemAlunos from './components/ListagemAlunos';
import Navbar from './components/Navbar';
import './App.css'; // Para estilos globais

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<CadastroAluno />} />
            <Route path="/listagem" element={<ListagemAlunos />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
