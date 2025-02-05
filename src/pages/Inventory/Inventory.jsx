import React, { useState, useEffect } from "react";
import "./Inventory.scss";
import InventoryList from "../../components/InventoryList/InventoryList";
import InventoryHeader from "../../components/InventoryHeader/InventoryHeader";
import axios from "axios";
import InventoryModal from "../../components/InventoryModal/InventoryModal";
import API_URL from "../../utils/utils";

function Inventory() {
  const [inventory, setInventory] = useState([]);
  const [inventoryModalOpen, setInventoryModalOpen] = useState(false);
  const [selectedInventory, setSelectedInventory] = useState("");
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);

  const handleOpenInventoryModal = (event) => {
    const id = Number(event.target.id);
    setSelectedInventory(id);
    setInventoryModalOpen(true);
  };

  const handleCloseInventoryModal = () => {
    setInventoryModalOpen(false);
  };
  const fetchInventories = async () => {
    try {
      const response = await axios.get(`${API_URL}/inventories`);
      setInventory(response.data);
    } catch (error) {
      console.error("Error fetching inventory:", error);
    }
  };

  useEffect(() => {
    fetchInventories();
  }, []);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/inventories/match/${keyword}`
        );

        setResults(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const debounceFetch = setTimeout(() => {
      if (keyword) {
        fetchResults();
      }
    }, 300); // Adjust the debounce delay as needed

    return () => clearTimeout(debounceFetch);
  }, [keyword]);
  return (
    <>
      <InventoryModal
        isOpen={inventoryModalOpen}
        onClose={handleCloseInventoryModal}
        inventoryId={selectedInventory}
        fetchData={fetchInventories}
      />
      <div className="inventory-page">
        <InventoryHeader keyword={keyword} setKeyword={setKeyword} />
        <InventoryList
          results={results}
          inventories={inventory}
          handleOpenInventoryModal={handleOpenInventoryModal}
          keyword={keyword}
        />
      </div>
    </>
  );
}

export default Inventory;
