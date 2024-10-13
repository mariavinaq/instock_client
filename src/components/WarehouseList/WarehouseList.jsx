import WarehouseItem from "../WarehouseItem/WarehouseItem";
import SortIcon from "../../assets/Icons/sort-24px.svg";
import "./WarehouseList.scss";
import { useEffect, useState } from "react";
import axios from "axios";
function WarehouseList({
  warehouses,
  results,
  handleOpenWarehouseModal,
  keyword,
}) {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("asc");
  const [column, setColumn] = useState("");

  useEffect(() => {
    sortItems();
  }, [order, column]);

  useEffect(() => {
    if (keyword) {
      setItems(results);
    } else {
      setItems(warehouses);
    }
  }, [keyword, results, warehouses]);

  const sortItems = () => {
    const sortedItems = [...items].sort((a, b) => {
      if (order === "asc") {
        return a[column] > b[column] ? 1 : -1;
      } else {
        return a[column] < b[column] ? 1 : -1;
      }
    });
    setItems(sortedItems);
  };

  const handleSort = (col) => {
    setColumn(col);
    setOrder(order === "asc" ? "desc" : "asc");
  };
  return (
    <>
      <section className="warehouse-list-section">
        <div className="warehouse-list-section__labels">
          <div className="warehouse-list-section__label-container warehouse-list-section__label-container-name">
            <div className="warehouse-list-section__label">WAREHOUSE</div>
            <img
              src={SortIcon}
              alt="Sort"
              onClick={() => handleSort("warehouse_name")}
              className="warehouse-list-section__label-img"
            />
          </div>
          <div className="warehouse-list-section__label-container warehouse-list-section__label-container-address">
            <div className="warehouse-list-section__label">ADDRESS</div>
            <img
              src={SortIcon}
              alt="Sort"
              onClick={() => handleSort("address")}
              className="warehouse-list-section__label-img"
            />
          </div>

          <div className="warehouse-list-section__label-container warehouse-list-section__label-container-name">
            <div className="warehouse-list-section__label">CONTACT NAME</div>
            <img
              src={SortIcon}
              alt="Sort"
              onClick={() => handleSort("contact_name")}
              className="warehouse-list-section__label-img"
            />
          </div>
          <div className="warehouse-list-section__label-container warehouse-list-section__label-container-info">
            <div className="warehouse-list-section__label">
              CONTACT INFORMATION
            </div>
            <img
              src={SortIcon}
              alt="Sort"
              onClick={() => handleSort("contact_email" || "contact_phone")}
              className="warehouse-list-section__label-img"
            />
          </div>
          <div className="warehouse-list-section__label-container warehouse-list-section__label-container-action">
            <div className="warehouse-list-section__label">ACTIONS</div>
          </div>
        </div>
        <ul className="warehouse-list">
          {items.map((item) => (
            <WarehouseItem
              key={item.id}
              warehouse={item}
              handleOpenWarehouseModal={handleOpenWarehouseModal}
            />
          ))}
        </ul>
      </section>
    </>
  );
}

export default WarehouseList;
