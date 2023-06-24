import { useContext, useState, useEffect } from "react";
import { db } from "../services/firebaseConfig";
import { getDocs, query, where, Timestamp, writeBatch, documentId, collection, addDoc } from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const CheckOut = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('')

    const {cart, total, clearCart} = useContext(CartContext)

    const createOrder = async ({name, phone, email}) => {
        setLoading(true)

        try{
            const objOrder = {
                comprador: {name, phone, email},
                items: cart,
                total: total(),
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const prodRef = collection(db, 'items')

            const productsAddedFromFirestore = await getDocs(query(prodRef, where(documentId(),'in',ids)))

            const {docs} = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stockDb

                const productsAddedToCart = cart.find(prod => prod.id === doc.id)
                const productsCantidad = productsAddedToCart?.cantidad

                if (stockDb >= productsCantidad) {
                    batch.update(doc.ref,{stock:stockDb- productsCantidad})
                } else {
                    outOfStock.push({id:doc.id, ...dataDoc})
                }
            })

            if (outOfStock.length !== 0) {
                await batch.commit()

                const orderRef = collection(db,'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else{
                console.error ('Disculpa, nos hemos quedado sin stock de algunos productos.')
            }
        } catch (error){
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return 
        <h1>Su orden esta siendo generada, espere un momento.</h1>
    }
    if (orderId) {
        return <h1>El id de su orden es: {orderId}</h1>
    }

    return (
        <div>
            <h2>Checkout</h2>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}

export default CheckOut;