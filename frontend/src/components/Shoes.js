import React from "react";
import "../App.css";
import { useCart } from "../CartContext";

// Images
import shoe1 from "../components/assets/s1.jpeg";
import shoe2 from "../components/assets/s2.jpeg";
import shoe3 from "../components/assets/s3.jpeg";

const Shoes = () => {
  const { cartItems, addToCart } = useCart(); // ✅ Access both cartItems and addToCart

  const shoes = [
    {
      id: 1,
      name: "Elegant Heels",
      price: "Rs. 5500",
      image: shoe1,
    },
    {
      id: 2,
      name: "Casual Sneakers",
      price: "Rs. 4000",
      image: shoe2,
    },
    {
      id: 3,
      name: "Flat Sandals",
      price: "Rs. 3200",
      image: shoe3,
    },
  ];

  const handleAddToCart = (shoe) => {
    addToCart(shoe); // ✅ Update global cart
    alert(`${shoe.name} added to cart!`);
  };

  return (
    <div className="shoes-container">
      <h2>Shoes Collection</h2>
      <p style={{ fontWeight: "bold" }}>🛒 Cart Items: {cartItems.length}</p>

      <div className="product-grid">
        {shoes.map((shoe) => (
          <div className="product-card" key={shoe.id}>
            <img src={shoe.image} alt={shoe.name} className="product-image" />
            <h4>{shoe.name}</h4>
            <p>{shoe.price}</p>
            <button className="add-to-cart-btn" onClick={() => handleAddToCart(shoe)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shoes;
