import React from 'react'
import { useOutletContext } from 'react-router-dom'

const ShoppingCartCard = ({product}) => {

    const {items,addToCart,removeFromCart} = useOutletContext()
    const amountInCart = items[product.id]
    const totalAmount = amountInCart * product.price

    return (
        <div className='p-3 bg-zinc-100 shadow-md flex justify-left gap-4 place-items-center'>
            <div>
                <img className='w-32 aspect-square' src={product.img} alt="" />

            </div>
            <div className=''>
                <h1 className='font-semibold text-lg'>{product.name}</h1>
                <div className='flex gap-5 place-items-center'>

                    <button onClick={()=>removeFromCart(product.id)}>-</button>
                    <h2 className='text-left'>Item: {amountInCart}</h2>
                    <button onClick={()=>addToCart(product.id)}>+</button>
                </div>
            </div>
            <h1 className='ml-auto'>Total: ${totalAmount} </h1>
        </div>
    )
}

export default ShoppingCartCard
