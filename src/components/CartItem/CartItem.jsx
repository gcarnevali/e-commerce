import React from 'react';


const CartItem = ({ name, cantidad, price, onClearItem, img }) => {

  return (
    <div className='ResumenCart'>
      <h3>{name}</h3>
      <p>Cantidad: {cantidad}</p>
      <p>Precio unitario: ${price}</p>
      <p>Subtotal: ${price * cantidad}</p>
    </div>
  );
};

export default CartItem;