// import "./SweetCard.css";

export default function SweetCard({ sweet, onPurchase, onRestock, onDelete, isAdmin }) {
  return (
    <div className="sweet-card">
      <h3>{sweet.name}</h3>
      <p>Category: {sweet.category}</p>
      <p>Price: ₹{sweet.price}</p>
      <p>Stock: {sweet.quantity}</p>

      <div className="actions">
        <button
          className="btn purchase"
          disabled={sweet.quantity === 0}
          onClick={() => onPurchase(sweet._id)}
        >
          Purchase
        </button>

        {isAdmin && (
          <>
            <button className="btn restock" onClick={() => onRestock(sweet._id)}>
              Restock
            </button>
            <button className="btn delete" onClick={() => onDelete(sweet._id)}>
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}
