import "./Warehouse.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import WarehouseHeader from "../../components/WarehouseHeader/WarehouseHeader";

function Warehouse() {
  const [warehouseData, setWarehouseData] = useState([]);

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
    console.log("Calling load component");
    fetchWarehouses();
  }, []);

  return (
    <>
      <WarehouseHeader />
      <WarehouseList warehouses={warehouseData} />
    </>
  );
}

export default Warehouse;
