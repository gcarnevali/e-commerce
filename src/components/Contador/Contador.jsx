import { useState } from 'react'

const Contador = ({stock, initial, onAdd}) => {
    const [cantidad, setCantidad] = useState(initial)

    const incrementar = () => {
        if(cantidad < stock)
        setCantidad(cantidad +1)
    }


    const quitar = () => {
        if(cantidad > 1) {
            setCantidad(cantidad -1)
        }
    }

    return(
        <div className='Contador'>
            <div className='Controles'>
                <button className='Button' onClick={quitar}>-</button>
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

export default Contador;