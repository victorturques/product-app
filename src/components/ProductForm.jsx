import React, { useState } from 'react';
import './ProductForm.scss';

function ProductForm({ addProduct }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [available, setAvailable] = useState('sim');

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ name, description, price: parseFloat(price), available });
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <div>
        <label>Nome do produto </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Descrição do produto </label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <div>
        <label>Valor do produto R$ </label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
      </div>
      <div>
        <label>Disponível para venda:</label>
        <select value={available} onChange={(e) => setAvailable(e.target.value)} required>
          <option value="sim">Sim</option>
          <option value="não">Não</option>
        </select>
      </div>
      <button type="submit">Cadastrar Produto</button>
    </form>
  );
}

export default ProductForm;
