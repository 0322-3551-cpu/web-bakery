import { useState } from "react";
import "../../styles/manager/inventoryOverview.css";

const INVENTORY = [
  { id: 1, name: "Chocolate Truffle", qty: 18, made: "2026-02-17", expiry: "2026-02-21", status: "Fresh" },
  { id: 2, name: "Strawberry Cream", qty: 5, made: "2026-02-15", expiry: "2026-02-20", status: "Near Expiry" },
  { id: 3, name: "Red Velvet 6\"", qty: 22, made: "2026-02-18", expiry: "2026-02-22", status: "Fresh" },
  { id: 4, name: "Matcha Mille-Feuille", qty: 0, made: "2026-02-12", expiry: "2026-02-17", status: "Expired" },
  { id: 5, name: "Caramel Macchiato", qty: 3, made: "2026-02-16", expiry: "2026-02-20", status: "Near Expiry" },
  { id: 6, name: "Lemon Chiffon", qty: 14, made: "2026-02-18", expiry: "2026-02-24", status: "Fresh" },
  { id: 7, name: "Ube Overload", qty: 9, made: "2026-02-17", expiry: "2026-02-21", status: "Fresh" },
  { id: 8, name: "Black Forest", qty: 0, made: "2026-02-10", expiry: "2026-02-15", status: "Expired" },
  { id: 9, name: "Mango Float Cake", qty: 7, made: "2026-02-17", expiry: "2026-02-20", status: "Near Expiry" },
];

const STATUS_FILTERS = ["All", "Fresh", "Near Expiry", "Expired"];

export default function InventoryOverview() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = INVENTORY.filter((item) => {
    const matchFilter = filter === "All" || item.status === filter;
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  const counts = {
    Fresh: INVENTORY.filter((i) => i.status === "Fresh").length,
    "Near Expiry": INVENTORY.filter((i) => i.status === "Near Expiry").length,
    Expired: INVENTORY.filter((i) => i.status === "Expired").length,
  };

  return (
    <div className="inventory-page">
      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1 className="page-title">Inventory Overview</h1>
          <p className="page-subtitle">Track all cake stock, freshness, and expiry status.</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="inv-summary-cards">
        <div className="inv-card inv-fresh">
          <span className="inv-count">{counts["Fresh"]}</span>
          <span className="inv-label">Fresh</span>
        </div>
        <div className="inv-card inv-near">
          <span className="inv-count">{counts["Near Expiry"]}</span>
          <span className="inv-label">Near Expiry</span>
        </div>
        <div className="inv-card inv-expired">
          <span className="inv-count">{counts["Expired"]}</span>
          <span className="inv-label">Expired</span>
        </div>
      </div>

      {/* Controls */}
      <div className="inv-controls">
        <div className="filter-tabs">
          {STATUS_FILTERS.map((f) => (
            <button
              key={f}
              className={`filter-tab ${filter === f ? "active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <input
          className="search-input"
          type="text"
          placeholder="Search cake..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Inventory Table */}
      <div className="inv-table-wrap">
        <div className="inv-table">
          <div className="inv-table-head">
            <span>Cake Name</span>
            <span>Quantity</span>
            <span>Made Date</span>
            <span>Expiry Date</span>
            <span>Status</span>
          </div>

          {filtered.map((item) => (
            <div className="inv-table-row" key={item.id}>
              <span className="cake-name">{item.name}</span>
              <span className={`cake-qty ${item.qty <= 5 ? "low-qty" : ""}`}>
                {item.qty} 
                {item.qty <= 5 && item.qty > 0 && <span className="low-tag">Low</span>}
                {item.qty === 0 && <span className="out-tag">Out</span>}
              </span>
              <span>{item.made}</span>
              <span>{item.expiry}</span>
              <span>
                <span className={`status-badge badge-${item.status.toLowerCase().replace(" ", "-")}`}>
                  {item.status}
                </span>
              </span>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="inv-empty">No items match the current filter.</div>
          )}
        </div>
      </div>
    </div>
  );
}
