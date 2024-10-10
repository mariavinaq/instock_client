import React, { useState, useEffect } from "react";
import "./Inventory.scss";
import InventoryList from "../../components/InventoryList/InventoryList";
import InventoryHeader from "../../components/InventoryHeader/InventoryHeader";
import axios from "axios";

function Inventory() {
  const [inventory, setInventory] = useState([]);

  const fetchInventories = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/inventories`);
      console.log("Inventories response" + response.data);
      setInventory(response.data);
    } catch (error) {
      console.error("Error fetching inventory:", error);
    }
  };

  useEffect(() => {
    console.log("Calling load component");
    fetchInventories();
  }, []);
  return (
    <div className="inventory-page">
      <InventoryHeader />
      <InventoryList inventories={inventory} />
    </div>
  );
}

export default Inventory;
