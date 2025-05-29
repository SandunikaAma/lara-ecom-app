import React from "react";
import { useLocation } from "react-router-dom";
import "../App.css";

const allProducts = [
  {
    id: 1,
    name: "Leather Tote Bag",
    price: "Rs. 3500",
    category: 'bags',
    image: "https://via.placeholder.com/200x250?text=Tote+Bag",
  },
  {
    id: 2,
    name: "Stylish Handbag",
    price: "Rs. 4200",
    category: 'bags',
    image: "https://via.placeholder.com/200x250?text=Handbag",
  },
  {
    id: 3,
    name: "Elegant Heels",
    price: "Rs. 5500",
    category: 'shoes',
    image: "https://via.placeholder.com/200x250?text=Heels",
  },
  {
    id: 4,
    name: "Casual Sneakers",
    price: "Rs. 4000",
    category: 'shoes',
    image: "https://via.placeholder.com/200x250?text=Sneakers",
  },
  {
    id: 5,
    name: "Evening Gown",
    price: "Rs. 7000",
    category: 'dresses',
    image: "https://via.placeholder.com/200x250?text=Evening+Gown",
  },
  {
    id: 6,
    name: "Summer Dress",
    price: "Rs. 4500",
    category: 'dresses',
    image: "https://via.placeholder.com/200x250?text=Summer+Dress",
  },
];

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchResults = () => {
  const query = useQuery().get("query")?.toLowerCase() || "";

  const results = allProducts.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

  return (
    <div className="all-products-container">
      <h2>Search Results for "{query}"</h2>
      {results.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="product-grid">
          {results.map((item) => (
            <div className="product-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <p>{item.price}</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
