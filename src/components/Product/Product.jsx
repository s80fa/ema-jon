import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


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
            <button onClick={()=>eventHandler(props.product)} className='btn-cart'>
                Add to Card  
                 <FontAwesomeIcon icon={faShoppingCart} 
                /></button>
        </div>
    );
};

export default Product;