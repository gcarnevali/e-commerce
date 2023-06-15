import { Link } from "react-router-dom";
import { useState } from "react";
import ContadorItem from "../ContadorItem/ContadorItem";
import Button from '../Button/Button'

const Item = ({id, name, price, img, stock, }) => {
    return (
            
                <article className="CardItem">
                    <header className="Header">
                        <h2 className="ItemHeader"> {name} </h2>
                    </header>
                    <picture>
                        <img src={img} alt={name} className="ItemImg" />
                    </picture>
                    <section>
                        <p className="Info">Precio: ${price}</p>
                        <p className="Info">Stock disponible: {stock}</p>
                    </section>
                    <footer className="ItemFooter">
                        <Link to={`/producto/${id}`} className="Option"> Ver Detalle</Link>
                    </footer>
                </article>
           
    )
}

export default Item;