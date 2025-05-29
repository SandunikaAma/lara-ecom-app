import React from "react";
import "../App.css";
import { useCart } from "../CartContext"; // ✅ Global cart context

// Images
import bag1 from "../components/assets/leatherbag.jpeg";
import bag2 from "../components/assets/totebag 2.jpeg";
import bag3 from "../components/assets/minibag.jpeg";

const Bags = () => {
  const { cartItems, addToCart } = useCart(); // ✅ Use from context

  const bags = [
    {
      id: 1,
      name: "Classic Leather Handbag",
      price: "Rs. 4500",
      image: bag1,
    },
    {
      id: 2,
      name: "Tote Bag",
      price: "Rs. 3000",
      image: bag2,
    },
    {
      id: 3,
      name: "Mini Shoulder Bag",
      price: "Rs. 3500",
      image: bag3,
    },
  ];

  const handleAddToCart = (bag) => {
    addToCart(bag); // ✅ This updates global cart
    alert(`${bag.name} added to cart!`);
  };

  return (
    <div className="bag-container">
      <h2>Bags Collection</h2>
      <p style={{ fontWeight: "bold" }}>🛒 Cart Items: {cartItems.length}</p>

      <div className="product-grid">
        {bags.map((bag) => (
          <div className="product-card" key={bag.id}>
            <img src={bag.image} alt={bag.name} className="product-image" />
            <h4>{bag.name}</h4>
            <p>{bag.price}</p>
            <button
              className="add-to-cart-btn"
              onClick={() => handleAddToCart(bag)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bags;
