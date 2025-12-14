import { useState } from "react";
import axios from "../api/axios";
import { useAuth } from "../context/AuthContext";

export default function AddSweetModal({ onClose, onAdded }) {
  const { token } = useAuth();
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    quantity: ""
  });

  const submit = async () => {
    await axios.post("/sweets", form, {
      headers: { Authorization: `Bearer ${token}` }
    });
    onAdded();
    onClose();
  };

  return (
    <div className="modal">
      <h3>Add Sweet</h3>
      <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Category" onChange={e => setForm({ ...form, category: e.target.value })} />
      <input placeholder="Price" onChange={e => setForm({ ...form, price: e.target.value })} />
      <input placeholder="Quantity" onChange={e => setForm({ ...form, quantity: e.target.value })} />
      <button onClick={submit}>Add</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}
