import React from 'react';
import { CartContext } from '../../context/CartContext';

const CartItem = ({ name, cantidad, precioPorUnidad, precioTotal, onClearItem }) => {

  return (
    <div>
      <h3>{name}</h3>
      <p>Cantidad: {cantidad}</p>
      <p>Precio unitario: ${precioPorUnidad}</p>
      <p>Total: ${precioTotal}</p>
      <button onClick={onClearItem}>Clear</button>
    </div>
  );
};

export default CartItem;