import React from "react"
import cart from "../../assets/cart.svg"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext);

  return (
    <Link to='/cart' className='CartWidget' style={{ display: cantidadTotal }}>
      <img src={cart} alt="cart-widget" className="carrito" />
      {cantidadTotal}
    </Link>
  )
}

export default CartWidget