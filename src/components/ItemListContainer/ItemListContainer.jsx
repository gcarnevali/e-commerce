import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ItemList from "./ItemList"

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../services/firebaseConfig";

const ItemListContainer = ({ }) => {
    let [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);

        const collectionRef = categoryId
            ? query(
                collection(db, "items"),
                where("category", "==", categoryId)
            )
            : collection(db, "items");

        getDocs(collectionRef)
            .then((response) => {
                const productsAdapted = response.docs.map((doc) => {
                    const data = doc.data();
                    return { id: doc.id, ...data };
                });
                setProductos(productsAdapted);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [categoryId]);


    return <ItemList loading={loading} productos={productos} />


}



export default ItemListContainer        