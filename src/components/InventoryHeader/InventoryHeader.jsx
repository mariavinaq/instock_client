import React from "react";
import "./InventoryHeader.scss";
import { Link } from "react-router-dom";

function InventoryHeader({ keyword, setKeyword }) {
  return (
    <div className="inventory-header">
      <h1 className="inventory-header__title">Inventory</h1>
      <div className="inventory-header__controls">
        <input
          type="text"
          className="inventory-header__input"
          placeholder="Search..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Link to="/inventories/add" className="inventory-header__add-btn-link">
          <button className="inventory-header__add-btn">+ Add New Item</button>
        </Link>
      </div>
    </div>
  );
}

export default InventoryHeader;
