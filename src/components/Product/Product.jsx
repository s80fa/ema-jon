import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, name, seller, ratings, price } = props.product;
    const eventHandler= props.eventHandler;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} stars</p>
            </div>
            <button onClick={()=>eventHandler(props.product)} className='btn-cart'>Add to Card</button>
        </div>
    );
};

export default Product;