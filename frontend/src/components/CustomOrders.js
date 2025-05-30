import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const CustomOrders = () => {
  const [formData, setFormData] = useState({ name: "", email: "", order: "" });
  const [orders, setOrders] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const fetchOrders = async () => {
    const res = await axios.get("http://13.127.78.245:3007/api/orders");
    setOrders(res.data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await axios.put(`http://13.127.78.245:3007/api/orders/${editingId}`, formData);
      setEditingId(null);
    } else {
      await axios.post("http://13.127.78.245:3007/api/orders", formData);
    }
    setFormData({ name: "", email: "", order: "" });
    fetchOrders();
  };

  const handleEdit = (order) => {
    setEditingId(order.id);
    setFormData({
      name: order.name,
      email: order.email,
      order: order.order_details,
    });
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://13.127.78.245:3007/api/orders/${id}`);
    fetchOrders();
  };

  return (
    <div className="custom-order-container">
      <h2>{editingId ? "Update Order" : "Place a Custom Order"}</h2>
      <form onSubmit={handleSubmit} className="custom-order-form">
        <label>Name:</label>
        <input name="name" value={formData.name} onChange={handleChange} required />

        <label>Email:</label>
        <input name="email" value={formData.email} onChange={handleChange} required />

        <label>Order Details:</label>
        <textarea name="order" rows="5" value={formData.order} onChange={handleChange} required />

        <button type="submit">{editingId ? "Update" : "Submit"} Order</button>
      </form>

      <hr />

      <h3>Your Orders</h3>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul className="order-list">
          {orders.map((order) => (
            <li key={order.id}>
              <strong>{order.name}</strong> ({order.email})<br />
              <em>{order.order_details}</em>
              <br />
              <button onClick={() => handleEdit(order)}>Edit</button>
              <button onClick={() => handleDelete(order.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomOrders;
