import "./InventoryList.scss";
import SortIcon from "../../assets/Icons/sort-24px.svg";
import InventoryItem from "../InventoryItem/InventoryItem";
import { useState, useEffect } from "react";

function InventoryList({
  inventories,
  results,
  keyword,
  handleOpenInventoryModal,
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
      setItems(inventories);
    }
  }, [keyword, results, inventories]);

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
    <div>
      <section className="inventory-list-section">
        <div className="inventory-list-section__labels">
          <div className="inventory-list-section__label-container inventory-list-section__label-container-inventory">
            <div className="inventory-list-section__label">INVENTORY ITEM</div>
            <img
              src={SortIcon}
              alt="Sort"
              onClick={() => handleSort("item_name")}
              className="inventory-list-section__label-img"
            />
          </div>
          <div className="inventory-list-section__label-container inventory-list-section__label-container-category">
            <div className="inventory-list-section__label">CATEGORY</div>
            <img
              src={SortIcon}
              alt="Sort"
              onClick={() => handleSort("category")}
              className="inventory-list-section__label-img"
            />
          </div>
          <div className="inventory-list-section__label-container inventory-list-section__label-container-status">
            <div className="inventory-list-section__label">STATUS</div>
            <img
              src={SortIcon}
              alt="Sort"
              onClick={() => handleSort("status")}
              className="inventory-list-section__label-img"
            />
          </div>
          <div className="inventory-list-section__label-container inventory-list-section__label-container-quantity">
            <div className="inventory-list-section__label">QTY</div>
            <img
              src={SortIcon}
              alt="Sort"
              onClick={() => handleSort("quantity")}
              className="inventory-list-section__label-img"
            />
          </div>
          <div className="inventory-list-section__label-container inventory-list-section__label-container-warehouse">
            <div className="inventory-list-section__label inventory-list-section__label-warehouse">
              WAREHOUSE
            </div>
            <img
              src={SortIcon}
              alt="Sort"
              onClick={() => handleSort("warehouse_name")}
              className="inventory-list-section__label-img"
            />
          </div>
          <div className="inventory-list-section__label-container inventory-list-section__label-container-actions">
            <div className="inventory-list-section__label">ACTIONS</div>
          </div>
        </div>
        <ul className="inventory-list">
          {items && items.length > 0 ? (
            items.map((item) => (
              <InventoryItem
                key={item.id}
                inventory={item}
                handleOpenInventoryModal={handleOpenInventoryModal}
              />
            ))
          ) : (
            <h2 className="inventory-list__not-found">
              Item with {`"${keyword}"`} keyword not found in the inventory list
            </h2>
          )}
        </ul>
      </section>
    </div>
  );
}

export default InventoryList;
