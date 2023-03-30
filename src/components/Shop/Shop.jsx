import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart()
        const savedCart =[];
        // step-1: get id
        for (const id in storedCart) {

            // step-2: get the product using id
            const savedProduct = products.find(product => product.id === id)

            // step-3:get the quantity of the product
            if (savedProduct) {
                const quantity = storedCart[id];
                console.log(quantity)
                savedProduct.quantity = quantity
                console.log(savedProduct)
                // step-4: add the saved product in the saved cart
                savedCart.push(savedProduct)
            }

        }
        // step-5:
        setCart(savedCart)

    }, [products])

    const eventHandler = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        eventHandler={eventHandler}
                    ></Product>)
                }
            </div>
            <div className="shopping-card">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;