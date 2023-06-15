import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import { getProductos, getProductoByCategory } from "../../asyncMock";

const ItemListContainer = ({}) => {
    let [productos, setProductos] = useState([]);
    const { categoryId } = useParams();

  
    useEffect(() => {
      const asyncFunc = categoryId ? getProductoByCategory : getProductos

      asyncFunc()
      .then((respuesta) => {     
          setProductos(respuesta);
        })
        .catch(error => {
          console.error(error);
        });
    }, [categoryId]);
  
    return (<ItemList productos={productos} />)
  }

export default ItemListContainer        