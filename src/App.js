import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CadastroForm from './CadastroForm';
import CadastroRealizado from './CadastroRealizado';
import ListaVagas from './ListarVagas';
import './style.css';

function App() {
  const [vagas, setVagas] = useState([]); // Estado para armazenar as vagas reservadas

  const handleCadastroSubmit = (formData) => {


    const novaVaga = {
      id: vagas.length + 1,
      ...formData,
    };

    setVagas([...vagas, novaVaga]);
  };

  const handleExcluirVaga = (vagaId) => {
    

    const novasVagas = vagas.filter((vaga) => vaga.id !== vagaId);

    setVagas(novasVagas);
  };

  return (
    <Router>
      <header>
        <h1>Estacionamento Souza</h1>
        <nav>
          <ul>
            <li>
              <Link to="/cadastro">Cadastro</Link>
            </li>
            <li>
              <Link to="/lista-vagas">Listar Vagas</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Route
        path="/cadastro"
        exact
        render={() => <CadastroForm onCadastroSubmit={handleCadastroSubmit} />}
      />
      <Route path="/cadastro-realizado" component={CadastroRealizado} />
      <Route
        path="/lista-vagas"
        render={() => (
          <ListaVagas vagas={vagas} onExcluirVaga={handleExcluirVaga} />
        )}
      />
    </Router>
  );

  
}

export default App;