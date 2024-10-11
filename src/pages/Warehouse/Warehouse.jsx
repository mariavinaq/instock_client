import "./Warehouse.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import WarehouseHeader from "../../components/WarehouseHeader/WarehouseHeader";
import WarehouseModal from "../../components/WarehouseModal/WarehouseModal";

function Warehouse() {
  const [warehouseData, setWarehouseData] = useState([]);
  const [warehouseModalOpen, setWarehouseModalOpen] = useState(false);
  const [selectedWarehouse, setSelectedWarehouse] = useState("");
  const handleOpenWarehouseModal = (event) => {
    const id = Number(event.target.id);
    setSelectedWarehouse(id);
    setWarehouseModalOpen(true);
  };

  const handleCloseWarehouseModal = () => {
    setWarehouseModalOpen(false);
  };

  const fetchWarehouses = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/warehouses`);
      console.log("Warehouses data: " + response.data);
      setWarehouseData(response.data);
    } catch (error) {
      console.error("Error fetching inventory:", error);
    }
  };

  useEffect(() => {
    fetchWarehouses();
  }, []);

  return (
    <>
      <WarehouseModal
        isOpen={warehouseModalOpen}
        onClose={handleCloseWarehouseModal}
        warehouseId={selectedWarehouse}
        fetchData={fetchWarehouses}
      />
      <WarehouseHeader />
      <WarehouseList
        warehouses={warehouseData}
        handleOpenWarehouseModal={handleOpenWarehouseModal}
      />
    </>
  );
}

export default Warehouse;
