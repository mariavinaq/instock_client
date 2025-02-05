import "./EditInventoryItem.scss";
import InventoryFormHeader from "../../components/InventoryFormHeader/InventoryFormHeader";
import InventoryForm from "../../components/InventoryForm/InventoryForm";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import API_URL from "../../utils/utils";

function EditInventoryItem() {
  const { id } = useParams();

  const [data, setData] = useState("");
  const [warehouseId, setWarehouseId] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const getItem = async () => {
      try {
        const itemResponse = await axios.get(
          `${API_URL}inventories/${id}`
        );
        const itemData = itemResponse.data;
        setData(itemData);
      } catch (error) {
        console.error(`Error fetching data for ID: ${error}`);
        setError(true);
      }
    };
    getItem();
  }, [id]);

  useEffect(() => {
    const getWarehouse = async () => {
      try {
        const warehouseResponse = await axios.get(
          `${API_URL}warehouses`
        );
        const warehouseList = warehouseResponse.data;
        const itemWarehouse = warehouseList.find(
          (warehouse) => warehouse.warehouse_name === data.warehouse_name
        );

        setWarehouseId(itemWarehouse.id);
      } catch (error) {
        console.error(`Could not fetch warehouse data.`);
      }
    };
    getWarehouse();
  }, [data.warehouse_name]);

  if (error) {
    return (
      <div className="error-message">
        Inventory item not found. Please return to the&nbsp;{" "}
        <Link to="/inventories">inventory page</Link>.
      </div>
    );
  } else if (!warehouseId) {
    return <div className="error-message">Loading data...</div>;
  }

  return (
    <>
      <div className="edit-inventory">
        <InventoryFormHeader>Edit Inventory Item</InventoryFormHeader>
        <InventoryForm data={data} button="Save" warehouseId={warehouseId} />
      </div>
    </>
  );
}

export default EditInventoryItem;
