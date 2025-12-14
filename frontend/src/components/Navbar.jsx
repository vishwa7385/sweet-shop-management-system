import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar({ onAdd, onSearch }) {
  const { user, logout } = useAuth();
  const isAdmin = user?.role === "admin";

  return (
    <nav className="navbar">
      <div className="left">
        <h2>🍬 Sweet Shop</h2>

        {isAdmin && (
          <button className="add-btn" onClick={onAdd}>
            + Add Sweet
          </button>
        )}
      </div>

      <div className="center">
        <input
          placeholder="Search by name or category"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      <div className="right">
        <Link to="/">Home</Link>

        {!user ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <>
            <span>{user.name} ({user.role})</span>
            <button onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}
