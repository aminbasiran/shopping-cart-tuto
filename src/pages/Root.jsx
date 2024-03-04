import React, {useState} from 'react'
import { Outlet,Link } from 'react-router-dom'
import { ShoppingBag } from 'phosphor-react'
import { products } from '../products'

const Root = () => {

    const getDefaultCart = () => {
        let cart = {}
        for (let x = 0 ; x < products.length  ; x++){
            cart[products[x].id] = 0
        }
        
        return cart
    }

    // console.log(getDefaultCart())

    const [items,setItems] = useState(getDefaultCart())

    const addToCart = (itemID) => {
        setItems(prev => ({...prev,[itemID]:prev[itemID] + 1}))
    }

    const removeFromCart = (itemID) => {
        setItems(prev => ({...prev,[itemID]:prev[itemID] - 1}))
    }


    return (
        <div>
            <div className='flex justify-between place-items-center mb-5'>
                <Link to="/shop">
                    <h1 className='text-4xl font-bold'>MadeUp Shop</h1>
                </Link>
                <Link to="/cart"><ShoppingBag size={40}/></Link>
            </div>
            <Outlet context={{items,addToCart,removeFromCart}}/>
        </div>
    )
}

export default Root
