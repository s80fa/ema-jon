import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=>setProducts(data))
    },[])
    
    const eventHandler = (product)=>{
        console.log(product);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product=> <Product 
                    key={product.id}
                    product= {product}
                    eventHandler={eventHandler}
                    ></Product>)
                }
            </div>
            <div className="shopping-card">
                <h4>order summery</h4>
            </div>
            
        </div>
    );
};

export default Shop;