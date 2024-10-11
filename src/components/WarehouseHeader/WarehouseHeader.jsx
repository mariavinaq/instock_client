import React from "react";
import "./WarehouseHeader.scss";
import { Link } from "react-router-dom";

function WarehouseHeader() {
  return (
    <div className="warehouse-header">
      <h1 className="warehouse-header__title">Warehouse</h1>
      <div className="warehouse-header__controls">
        <input
          type="text"
          className="warehouse-header__input"
          placeholder="Search..."
        />
        <Link to="/warehouses/add" className="warehouse-header__add-btn-link">
          <button className="warehouse-header__add-btn">
            + Add New Warehouse
          </button>
        </Link>
      </div>
    </div>
  );
}

export default WarehouseHeader;
