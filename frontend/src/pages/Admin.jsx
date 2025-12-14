import { useState } from "react";
import axios from "../api/axios";
import { useAuth } from "../context/AuthContext";

export default function Admin() {
  const { token } = useAuth();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const add = async () => {
    await axios.post("/sweets", {
      name,
      category: "Indian",
      price,
      quantity: 10
    }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    alert("Sweet added");
  };

  return (
    <>
      <h2>Admin Panel</h2>
      <input placeholder="Sweet Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Price" onChange={e => setPrice(e.target.value)} />
      <button onClick={add}>Add Sweet</button>
    </>
  );
}
