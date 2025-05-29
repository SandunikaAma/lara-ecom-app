import React from "react";
import "../App.css";
import { useCart } from "../CartContext";
import dress1 from "../components/assets/d1.jpeg";
import dress2 from "../components/assets/d2.jpeg";
import dress3 from "../components/assets/d3.jpeg";

const Dresses = () => {
  const { cartItems, addToCart } = useCart(); // ✅ Access both cartItems and addToCart

  const dresses = [
    {
      id: 1,
      name: "Evening Gown",
      price: "Rs. 7000",
      image: dress1,
    },
    {
      id: 2,
      name: "Summer Dress",
      price: "Rs. 4500",
      image: dress2,
    },
    {
      id: 3,
      name: "Formal Office Dress",
      price: "Rs. 6000",
      image: dress3,
    },
  ];

  const handleAddToCart = (dress) => {
    addToCart(dress); // ✅ Use context to update global cart
    alert(`${dress.name} added to cart!`);
  };

  return (
    <div className="dresses-container">
      <h2>Dresses Collection</h2>
      <p style={{ fontWeight: "bold" }}>🛒 Cart Items: {cartItems.length}</p>

      <div className="product-grid">
        {dresses.map((dress) => (
          <div className="product-card" key={dress.id}>
            <img src={dress.image} alt={dress.name} className="product-image" />
            <h4>{dress.name}</h4>
            <p>{dress.price}</p>
            <button className="add-to-cart-btn" onClick={() => handleAddToCart(dress)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dresses;
