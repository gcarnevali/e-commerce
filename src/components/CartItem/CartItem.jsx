import React from 'react';

const CartItem = ({ name, cantidad, precioPorUnidad, precioTotal, onClearItem }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Cantidad: {cantidad}</p>
      <p>Price per unit: ${precioPorUnidad}</p>
      <p>Total Price: ${precioTotal}</p>
      <button onClick={onClearItem}>Clear</button>
    </div>
  );
};

export default CartItem;