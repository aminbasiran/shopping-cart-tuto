import React from 'react'
import Card from '../ components/Card'
import { products } from '../products'
import { useOutletContext } from 'react-router-dom'

const Shop = () => {

    const {items,addToCart} = useOutletContext()

    return (
        <div>
        <div className='grid grid-cols-4 gap-4'>
                {products.map(product=> <Card key={product.id} product={product} addToCart={addToCart}/>)}
        </div>
        </div>
    )
}

export default Shop
