import React from "react";
import "./WarehouseItem.scss";
import { Link, useNavigate } from "react-router-dom";
import editIcon from "../../assets/icons/edit-24px.svg";
import deleteicon from "../../assets/icons/delete_outline-24px.svg";
import ChevronRightIcon from "../../assets/icons/chevron_right-24px.svg";

function WarehouseItem({ warehouse, handleOpenWarehouseModal }) {
  const navigate = useNavigate();

  return (
    <div className="warehouse-item">
      <div className="warehouse-item__main-container">
        <div className="warehouse-item__details-container">
          <div className="warehouse-item__name-container">
            <p className="warehouse-item__label-mobile">INVENTORY ITEM</p>
            <Link
              to={`/inventories/${warehouse.id}`}
              className="warehouse-item__name-sub-container"
            >
              <p className="warehouse-item__name">{warehouse.warehouse_name}</p>
              <img
                src={ChevronRightIcon}
                alt="More details"
                className="warehouse-item__chevron"
              />
            </Link>
          </div>
          <div className="warehouse-item__detail-container">
            <p className="warehouse-item__label-mobile">ADDRESS</p>
            <p className="warehouse-item__category">{warehouse.address}</p>
          </div>
        </div>
        <div className="warehouse-item__info-container">
          <div className="warehouse-item__detail-container">
            <p className="warehouse-item__label-mobile">CONTACT NAME</p>
            <p className="warehouse-item__detail">{warehouse.contact_name}</p>
          </div>
          <div className="warehouse-item__info-container">
            <div className="warehouse-item__detail-container">
              <p className="warehouse-item__label-mobile">CONTACT INFO</p>
              <p className="warehouse-item__detail">
                {warehouse.contact_phone}
              </p>
              <p className="warehouse-item__detail">
                {warehouse.contact_email}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="warehouse-item__actions">
        <div className="warehouse-item__actions-container">
          <button aria-label="Delete item" className="warehouse-item__delete">
            <img
              src={deleteicon}
              id={warehouse.id}
              onClick={handleOpenWarehouseModal}
            />
          </button>
        </div>
        <div className="warehouse-item__actions-container">
          <button aria-label="Delete item" className="warehouse-item__delete">
            <img
              src={editIcon}
              onClick={() => navigate(`/warehouses/edit/${warehouse.id}`)}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default WarehouseItem;
