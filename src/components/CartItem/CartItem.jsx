import React from 'react';
import { CartContext } from '../../context/CartContext';

const CartItem = ({ name, cantidad, price, onClearItem }) => {

  return (
    <div>
      <h3>{name}</h3>
      <p>Cantidad: {cantidad}</p>
      <p>Precio unitario: ${price}</p>
      <p>Total: ${price*cantidad}</p>
      <button onClick={onClearItem}>Clear</button>
    </div>
  );
};

export default CartItem;