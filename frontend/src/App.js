import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Main from "./pages/Main"; 
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Bags from "./components/Bags";
import Shoes from "./components/Shoes";
import Dresses from "./components/Dresses";
import AllProducts from "./components/AllProducts";
import CustomOrders from "./components/CustomOrders";
import Contact from "./components/Contact";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/bags" element={<Bags />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/dresses" element={<Dresses />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/custom-orders" element={<CustomOrders />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<SearchResults />} />
        
       
       

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
