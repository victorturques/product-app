import React from 'react';
import './ProductList.scss';

function ProductList({ products }) {
  const sortedProducts = products.sort((a, b) => a.price - b.price);
  

  return (
    <table className="product-list">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        {sortedProducts.map((product, index) => (
          <tr key={index}>
            <td>{product.name}</td>
            <td>R$ {product.price.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductList;
