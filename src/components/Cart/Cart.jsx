import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // const Cart = (props) => {
    // const cart= props.cart; //option-1
    // const {cart} = props;   //option-2
    
    let totalPrice =0;
    let totalShipping=0;
    
    for (const product of cart){
        console.log(product.price)
        totalPrice= totalPrice+product.price;
        totalShipping=totalShipping+ product.shipping;

    }
    const taxTotal= totalPrice*7/100;
    const grandTotal = totalPrice + totalShipping + taxTotal;

    
    

    return (
        <div className='cart'>
            <h4>order summery</h4>
            <p>Select Items: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${taxTotal.toFixed(2)}</p>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;