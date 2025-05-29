import React from "react";
import "../App.css";
import { useCart } from "../CartContext";

function Cart() {
  const { cartItems } = useCart(); // Access cart from context

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h2>Your Cart</h2>
      </div>

      <div className="cart-content">
        <p>You have {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart.</p>

        {cartItems.length > 0 && (
          <div className="cart-items-grid">
            {cartItems.map((item, index) => (
              <div className="cart-item-card" key={index}>
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p>{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
