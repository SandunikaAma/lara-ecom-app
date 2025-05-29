import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import '../App.css';
import { useCart } from "../CartContext";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { cartCount } = useCart(); // <-- Get cart count

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <button className="burger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className="logo">
          <span>Lara</span>
        </div>

        <form className="search" onSubmit={handleSearch}>
          <FaSearch className="search-icon" onClick={handleSearch} />
          <input
            type="text"
            placeholder="Search bags, shoes, dresses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>

        <div className="actions">
          <button className="login" onClick={()=>navigate('/signup')}>
            <FaUser className="icon" />
            <span className="login-text">Login</span>
          </button>
          <button className="cart" onClick={()=>navigate('/cart')}>
            <FaShoppingCart className="icon" />
            <span className="cart-badge">{cartCount}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="category-menu">
          <ul>
            <li><a href="/all-products">All Products</a></li>
            <li><a href="/bags">Bags</a></li>
            <li><a href="/shoes">Shoes</a></li>
            <li><a href="/dresses">Dresses</a></li>
            <li><a href="/custom-orders">Custom Orders</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
