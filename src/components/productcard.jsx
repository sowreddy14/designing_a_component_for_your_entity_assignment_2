import React from 'react';
import Button from './button';
import './items.css';

const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxmbRlXsHd7tKxKqhNqsz5l42xlgtSx_4L4w&s" alt="Product" />
      </div>
      <h2>BMW</h2>
      <p>$ 999</p>
      <Button />
    </div>
  );
};

export default ProductCard;