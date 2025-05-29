import React from "react";
import "../App.css";
import { useCart } from "../CartContext";
import bag1 from "../components/assets/leatherbag.jpeg";
import bag2 from "../components/assets/totebag 2.jpeg";
import bag3 from "../components/assets/minibag.jpeg";
import shoe1 from "../components/assets/s1.jpeg"
import shoe2 from "../components/assets/s2.jpeg"
import shoe3 from "../components/assets/s3.jpeg"
import dress1 from "../components/assets/d1.jpeg"
import dress2 from "../components/assets/d2.jpeg"
import dress3 from "../components/assets/d3.jpeg"

const AllProducts = () => {
  const { addToCart } = useCart(); 

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

  return (
    <div className="all-products-container">
      <div className="category-section">
        <h2>Bags Collection</h2>
        <div className="product-grid">
          {bags.map((item) => (
            <div className="product-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <p>{item.price}</p>
              <button className="add-to-cart-btn" onClick={() => addToCart(item)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="category-section">
        <h2>Shoes Collection</h2>
        <div className="product-grid">
          {shoes.map((item) => (
            <div className="product-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <p>{item.price}</p>
              <button className="add-to-cart-btn" onClick={() => addToCart(item)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="category-section">
        <h2>Dresses Collection</h2>
        <div className="product-grid">
          {dresses.map((item) => (
            <div className="product-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <p>{item.price}</p>
              <button className="add-to-cart-btn" onClick={() => addToCart(item)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
