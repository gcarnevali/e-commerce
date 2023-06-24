import { useContext, useState } from "react";
import ContadorItem from "../ContadorItem/ContadorItem";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, name, img, descripcion, price, stock, cantidad }) => {
    const [cantidadAgregada, setCantidadAgregada] = useState(0)
    const { addItem } = useContext(CartContext)
    const handleOnAdd = (cantidad) => {
        setCantidadAgregada(cantidad)

        const item = {
            id, name, price
        }
        addItem(item, cantidad)
    }


    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader"> {name} </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info"> Descripcion: {descripcion} </p>
                <p className="Info"> Precio: ${price} </p>
                <p className="Info"> Cantidad: {stock}</p>
            </section>
            <footer className="ItemFooter">
                {
                    cantidadAgregada > 0 ? (
                        <Link to='/cart' className='Option'>Terminar Compra</Link>
                    ) : (
                        <ContadorItem initial={0} stock={stock} onAdd={handleOnAdd}></ContadorItem>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail