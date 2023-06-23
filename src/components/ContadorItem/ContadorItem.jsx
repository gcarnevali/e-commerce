import { useState } from 'react'

const ContadorItem = ({ stock, initial, onAdd }) => {
    const [cantidad, setCantidad] = useState(initial)

    const incrementar = () => {
        if (cantidad < stock)
            setCantidad(cantidad + 1)
    }


    const quitar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    return (
        <div className='Contador'>
            <div className='Controles'>
                <button className='Button' onClick={quitar}>-</button>
                <h4 className='Number'>{cantidad}</h4>
                <button className='Button' onClick={incrementar}>+</button>
            </div>
            <div>
                <button className='Button' onClick={() => onAdd(cantidad)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ContadorItem;