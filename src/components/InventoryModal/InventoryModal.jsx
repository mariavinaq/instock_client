import React, { useState, useEffect } from "react";
import axios from "axios";
import "./InventoryModal.scss";
import Modal from "../Modal/Modal";
import API_URL from "../../utils/utils";

export default function InventoryModal({
  isOpen,
  onClose,
  inventoryId,
  fetchData,
}) {
  const [inventoryName, setInventoryName] = useState("");

  useEffect(() => {
    const fetchInventoryName = async () => {
      try {
        if (isOpen && inventoryId) {
          const response = await axios.get(
            `${API_URL}inventories/${inventoryId}`
          );
          setInventoryName(response.data.item_name);
        }
      } catch (error) {
        console.error("Error fetching inventory name:", error);
      }
    };

    fetchInventoryName();
  }, [isOpen, inventoryId]);

  const deleteInventory = async () => {
    try {
      await axios.delete(`${API_URL}inventories/${inventoryId}`);
      fetchData();
      onClose();
    } catch (error) {
      console.error("Could not delete inventory:", error);
    }
  };
  const handleDelete = () => {
    deleteInventory(inventoryId);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} handleDelete={handleDelete}>
      <h1 className="inventory-modal__header">
        Delete {inventoryName} inventory
      </h1>
      <p className="inventory-modal__message">
        Please confirm that you'd like to delete {inventoryName} from the
        inventory list. You won't be able to undo this action.
      </p>
    </Modal>
  );
}
