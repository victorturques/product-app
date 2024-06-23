import React, { useState } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import './App.scss';

function App() {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const addProduct = (product) => {
    setProducts([...products, product]);
    setShowForm(false);
  };

  return (
    <div className="app">
      {showForm ? (
        <ProductForm addProduct={addProduct} />
      ) : (
        <>
          <button className="new-product-button" onClick={() => setShowForm(true)}>Cadastrar Novo Produto</button>
          <ProductList products={products} />
        </>
      )}
    </div>
  );
}

export default App;

