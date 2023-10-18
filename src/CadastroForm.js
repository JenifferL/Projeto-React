import React, { useState } from 'react';
import './style.css';

function CadastroForm() {
  const [formData, setFormData] = useState({
    placa: '',
    proprietario: '',
    apartamento: '',
    bloco: '',
    modelo: '',
    cor: '',
    vaga: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Faça algo com os dados, como enviar uma solicitação para um servidor
    console.log('Dados do formulário:', formData);
    // Redirecionar ou executar outras ações necessárias
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="placa">Placa do Veículo:</label>
      <input
        type="text"
        id="placa"
        name="placa"
        value={formData.placa}
        onChange={handleInputChange}
        required
      /><br />

      {/* Adicione os outros campos do formulário aqui de maneira semelhante */}

      <button type="submit">Salvar</button>
    </form>
  );
}

export default CadastroForm;