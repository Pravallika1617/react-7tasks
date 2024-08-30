import React from 'react';
import "./cart.css";

function Cart({ cart, removeFromCart, updateQuantity }) {
    const handleQuantityChange = (productId, newQuantity) => {
        updateQuantity(productId, newQuantity);
    };

    const totalAmount = cart.reduce((acc, product) => {
        return acc + product.price * product.quantity;
    }, 0);

    return (
        <div className='cart'>
            <div className='two'>
                <h1>Cart</h1>

                {
                    cart.map((product) => (
                        <div key={product.id} className='product1'>
                            <img src={product.image} alt={product.title} />
                            <h2 className='title'>{product.title}</h2>
                            <h2 className='price'>${product.price}</h2>
                            <div className="quantity">
                                <button onClick={() => handleQuantityChange(product.id, product.quantity - 1)}>-</button>
                                <input type="text" value={product.quantity} readOnly />
                                <button onClick={() => handleQuantityChange(product.id, product.quantity + 1)}>+</button>
                            </div>
                            <button onClick={() => removeFromCart(product.id)}>Remove</button>
                        </div>
                    ))
                }
                <div className="total">
                    <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
                </div>
            </div>
        </div>
    );
}

export default Cart;