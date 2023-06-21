import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, cantidadTotal, total} = useContext(CartContext)

    if(cantidadTotal === 0) {
        return (
            <div>
                <h1> No hay items en el carrito </h1>
                <Link to='/' className="Option"> Productos </Link>
            </div>
        )
    }

    return (
        <div>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3> Total: ${total}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar Carrito</button>
            <Link to='/checkout' className="Option">Checkout</Link>
        </div>
    )
}

export default Cart;