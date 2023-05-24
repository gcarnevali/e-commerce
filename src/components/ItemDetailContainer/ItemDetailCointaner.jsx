import { useState, useEffect } from 'react';
import { getProductos } from '../Productos';
import { useParams } from 'react-router-dom';
import Item from '../Item/Item';

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
        <div className='ItemDetailContainer'>
            <Item {...producto} />
        </div>
    );

}

export default ItemDetailContainer;