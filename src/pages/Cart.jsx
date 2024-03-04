import React from 'react'
import { useOutletContext } from 'react-router-dom'
import ShoppingCartCard from '../ components/ShoppingCartCard'
import { products } from '../products'

const Cart = () => {

    const {items} = useOutletContext()
    
    const getGrandTotal = () => {
        let grandTotal = 0

        for (let x = 1 ; x < products.length + 1 ; x++){
            if (items[x] !== 0){
                grandTotal += items[x] * products[x-1].price
            }
        }

        return grandTotal
    }

    return (

        <div>

            <div className='flex flex-col gap-4'>
                
                {products.map(product => {
                    if(items[product.id] !== 0 ){
                        return <ShoppingCartCard key={product.id} product={product} />
                    }
                })}

            </div>
            <h1 className='text-right'>Grand total: $ {getGrandTotal()}</h1>
        </div>
    )
}

export default Cart
