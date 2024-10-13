import "./WarehouseInventory.scss";
import SortIcon from "../../assets/Icons/sort-24px.svg";
import WarehouseInventoryItem from "../WarehouseInventoryItem/WarehouseInventoryItem";
import { useEffect, useState } from "react";

function WarehouseInventory({ inventory, handleOpenInventoryModal }) {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("asc");
  const [column, setColumn] = useState("");

  useEffect(() => {
    sortItems();
  }, [order, column]);

  useEffect(() => {
    setItems(inventory);
  }, [inventory]);

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
    <section className="warehouse-inventory">
      <div className="warehouse-inventory__labels">
        <div className="warehouse-inventory__label-container warehouse-inventory__label-container--inventory">
          <div className="warehouse-inventory__label">Inventory Item</div>
          <img
            src={SortIcon}
            alt="Sort"
            onClick={() => handleSort("item_name")}
            className="warehouse-inventory__sort"
          />
        </div>
        <div className="warehouse-inventory__label-container warehouse-inventory__label-container--category">
          <div className="warehouse-inventory__label">Category</div>
          <img
            src={SortIcon}
            alt="Sort"
            onClick={() => handleSort("category")}
            className="warehouse-inventory__sort"
          />
        </div>
        <div className="warehouse-inventory__label-container warehouse-inventory__label-container--status">
          <div className="warehouse-inventory__label">Status</div>
          <img
            src={SortIcon}
            alt="Sort"
            onClick={() => handleSort("status")}
            className="warehouse-inventory__sort"
          />
        </div>
        <div className="warehouse-inventory__label-container warehouse-inventory__label-container--quantity">
          <div className="warehouse-inventory__label">Quantity</div>
          <img
            src={SortIcon}
            alt="Sort"
            onClick={() => handleSort("quantity")}
            className="warehouse-inventory__sort"
          />
        </div>
        <div className="warehouse-inventory__label-container warehouse-inventory__label-container--actions">
          <div className="warehouse-inventory__label">Actions</div>
        </div>
      </div>
      <ul className="warehouse-inventory__items">
        {items.map((item) => (
          <WarehouseInventoryItem
            key={item.id}
            item={item}
            handleOpenInventoryModal={handleOpenInventoryModal}
          />
        ))}
      </ul>
    </section>
  );
}

export default WarehouseInventory;
