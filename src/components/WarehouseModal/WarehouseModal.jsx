import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WarehouseModal.scss";
import Modal from "../Modal/Modal";
import API_URL from "../../utils/utils";

export default function WarehouseModal({
  isOpen,
  onClose,
  warehouseId,
  fetchData,
}) {
  const [warehouseName, setWarehouseName] = useState("");

  useEffect(() => {
    const fetchWarehouseName = async () => {
      try {
        if (isOpen && warehouseId) {
          const response = await axios.get(
            `${API_URL}/warehouses/${warehouseId}`
          );
          setWarehouseName(response.data.warehouse_name);
        }
      } catch (error) {
        console.error("Error fetching warehouse name:", error);
      }
    };

    fetchWarehouseName();
  }, [isOpen, warehouseId]);
  const deleteWarehouse = async () => {
    try {
      await axios.delete(`${API_URL}/warehouses/${warehouseId}`);
      fetchData();
      onClose();
    } catch (error) {
      console.error("Could not delete warehouse:", error);
    }
  };
  const handleDelete = () => {
    deleteWarehouse(warehouseId);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} handleDelete={handleDelete}>
      <h1 className="warehouse-modal__header">
        Delete {warehouseName} warehouse ?
      </h1>
      <p className="warehouse-modal__message">
        Please confirm that you'd like to delete the {warehouseName} from the
        list of warehouses. You won't be able to undo this action.
      </p>
    </Modal>
  );
}
