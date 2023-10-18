import React from 'react';
import './style.css';

function ListaVagas({ vagas, onExcluirVaga }) {
  return (
    <div>
      <h1>Lista de Vagas</h1>
      <section>
        <h2>Vagas Reservadas</h2>
        <ul>
          {vagas.map((vaga) => (
            <li key={vaga.id}>
              {`Vaga ${vaga.numero} - Reservada para ${vaga.proprietario}`}
              <button onClick={() => onExcluirVaga(vaga.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Vagas Disponíveis</h2>
        <ul>
          {/* Lista de vagas disponíveis */}
        </ul>
      </section>
    </div>
  );
}

export default ListaVagas;