import { useState, useEffect } from 'react';
import { getProductos } from '../Productos';
import { useParams } from 'react-router-dom';
import Item from '../Item/Item';
import ContadorItem from '../ContadorItem/ContadorItem';



function ItemDetailContainer() {
    const [producto, setProducto] = useState(null);

    const { itemId } = useParams();

    useEffect(() => {
        getProductos(itemId)
            .then(response => {
                setProducto(response);
            })
            .catch(error => {
                console.error(error);
            });
    }, [itemId]);

    return (
        <div className='detalle-producto-main'>
            <div className='detalle-producto'>
                <h1>{producto.name}</h1>
                <h2>$ {producto.precio}</h2>
                <ContadorItem stock={6} />
            </div>
        </div>
    );

}

export default ItemDetailContainer;