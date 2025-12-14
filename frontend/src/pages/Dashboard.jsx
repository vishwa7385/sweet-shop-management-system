import { useEffect, useState } from "react";
import axios from "../api/axios";
import SweetCard from "../components/SweetCard";
import Navbar from "../components/Navbar";
import AddSweetModal from "../components/AddSweetModal";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const [sweets, setSweets] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const { user, token } = useAuth();
  const isAdmin = user?.role === "admin";

  const fetchSweets = async () => {
    const res = await axios.get("/sweets");
    setSweets(res.data);
  };

  const searchSweets = async (value) => {
    if (!value) return fetchSweets();
    const res = await axios.get(`/sweets/search?name=${value}`);
    setSweets(res.data);
  };

  const purchase = async (id) => {
    await axios.post(`/sweets/${id}/purchase`, {}, {
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchSweets();
  };

  const restock = async (id) => {
    await axios.post(`/sweets/${id}/restock`, { quantity: 5 }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchSweets();
  };

  const remove = async (id) => {
    await axios.delete(`/sweets/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchSweets();
  };

  useEffect(() => {
    fetchSweets();
  }, []);

  return (
    <>
      <Navbar onAdd={() => setShowAdd(true)} onSearch={searchSweets} />

      {showAdd && <AddSweetModal onClose={() => setShowAdd(false)} onAdded={fetchSweets} />}

      <div className="sweets-grid">
        {sweets.map((s) => (
          <SweetCard
            key={s._id}
            sweet={s}
            isAdmin={isAdmin}
            onPurchase={purchase}
            onRestock={restock}
            onDelete={remove}
          />
        ))}
      </div>
    </>
  );
}
