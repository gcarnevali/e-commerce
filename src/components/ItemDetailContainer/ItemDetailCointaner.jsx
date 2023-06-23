import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import ItemDetail from '../ItemDetail/ItemDetail';

import { getDoc, doc } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';


function ItemDetailContainer() {
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(null);

    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'items', itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productAdapted = { id: response.id, ...data }
                setProducto(productAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false);
            })

    }, [itemId])

    return (
        <div className='detalle-producto-main'>
            <ItemDetail {...producto} />
        </div>
    );

}

export default ItemDetailContainer;