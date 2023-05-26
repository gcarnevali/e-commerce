import { Link } from "react-router-dom";
import { useState } from "react";
import ContadorItem from "../ContadorItem/ContadorItem";
import Button from '../Button/Button'

function DescripcionProducto({ precio, stock }) {
    return (
        <div>
            <h4 className="item-card-precio">$ {precio} </h4>
            <p className="item-card-stock">Stock: {stock}</p>
            </div>
    )
}

const Item = ({id, name, price, img, stock}) => {
    return (
            <Link to={`/producto/${id}`}>
                <div className="item-card">
                    <div className="item-card_header">
                        <h2>{name}</h2>
                        <p>{stock}</p>
                    </div>
                    <div className="item-card_image">
                        <img src={img} alt="" />
                    </div>
                <DescripcionProducto price={price}/>
                <ContadorItem stock={6} />
                
                <Button> Ver Detalle </Button>
                </div>
            </Link>
    )
}

export default Item;