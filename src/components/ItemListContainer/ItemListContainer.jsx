import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import productos from '../Productos'

function getData() {
    return new Promise ((resolve) => {
        setTimeout(() => resolve(productos)), 1000;
    })
}

function ItemListContainer() {
    let [productos, setProductos] = useState([]);
    const { categoryId } = useParams();
  
    useEffect(() => {
      getData().then((respuesta) => {
        if (categoryId) {
          const filterProducts = respuesta.filter(
            (item) => item.category === categoryId
          );
          setProductos(filterProducts);
        } else {
          setProductos(respuesta);
        }
      });
    }, [categoryId]);
  
    return <ItemList productos={productos} />;
  }

export default ItemListContainer