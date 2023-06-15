import ContadorItem from "../ContadorItem/ContadorItem";

const ItemDetail = ({ id, name, img, description, price, stock}) => {
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader"> {name} </h2>
            </header>
            <picture>
            <img src={img} alt={name} className="ItemImg"/>
        </picture>
        <section>
            <p className="Info"> Descripcion: {description} </p>
            <p className="Info"> Precio: ${price} </p>
        </section>
        <footer className="ItemFooter">
            <ContadorItem initial={1} stock={stock} onAdd={(cantidad) => console.log('Cantidad agregada')}/>
            </footer>
        </article>
    )
}

export default ItemDetail