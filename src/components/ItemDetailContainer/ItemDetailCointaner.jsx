import { useState, useEffect, useContext } from 'react';
import { getProductoById } from '../../asyncMock';
import { useParams } from 'react-router-dom';
import { cartContext } from '../../App';
import ItemDetail from '../ItemDetail/ItemDetail';



function ItemDetailContainer() {
    const [producto, setProducto] = useState(null);
    const { cart } = useContext(cartContext)
    const { itemId } = useParams();

    useEffect(() => {
        getProductoById(itemId)
            .then(response => {
                setProducto(response);
            })
            .catch(error => {
                console.error(error);
            });
    }, [itemId]);

    return (
        <div className='detalle-producto-main'>
            <ItemDetail {...producto} />
        </div>
    );

}

export default ItemDetailContainer;