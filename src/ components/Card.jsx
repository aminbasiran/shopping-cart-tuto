import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Card = ({product,addToCart}) => {

    const {items} = useOutletContext()

    const amountInCart = items[product.id]

    return (
        <div>
            <div>
                <img src={product.img} alt="" />
            </div>
            <h1>{product.name}</h1>
            <h2>${product.price}</h2>
            <button onClick={()=>addToCart(product.id)} className='p-3 bg-indigo-300 rounded-lg cursor-pointer'>Add to cart {amountInCart > 0 && `(${amountInCart})`}</button>
        </div>
    )
}

export default Card
