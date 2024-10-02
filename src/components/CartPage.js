import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart } from '../slices/cartSlice';

const CartPage = () => {
  const { items, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {items.map((item) => (
            <div key={item._id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => handleRemoveFromCart(item)}>Remove from Cart</button>
            </div>
          ))}
          <h3>Total Amount: ${totalAmount}</h3>
          <button onClick={handleClearCart}>Clear Cart</button>
          <button>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
