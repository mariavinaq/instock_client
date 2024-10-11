import { useState, useEffect } from "react";
import axios from "axios";
import "./AddNewInventory.scss";
import { useNavigate } from "react-router-dom";
import InventoryFormHeader from "../InventoryFormHeader/InventoryFormHeader";
import { v4 as uuidv4 } from "uuid";
import FormError from "../FormError/FormError";

function AddNewInventory() {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [warehouse, setWarehouse] = useState("");
  const [warehouseList, setWarehouseList] = useState([]);
  const [status, setStatus] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getWarehouses = async () => {
      try {
        const response = await axios.get("http://localhost:8080/warehouses");
        setWarehouseList(response.data);
      } catch (error) {
        console.error("Error fetching warehouses:", error);
      }
    };
    getWarehouses();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !itemName ||
      !description ||
      !category ||
      !status ||
      !quantity ||
      !warehouse
    ) {
      setError(true);
      return;
    }

    const newId = uuidv4();

    const newInventoryItem = {
      id: newId,
      warehouse_id: Number(warehouse),
      item_name: itemName,
      description: description,
      category: category,
      status: status,
      quantity: quantity,
    };

    try {
      await axios.post("http://localhost:8080/inventories", newInventoryItem);
      navigate(-1);
    } catch (error) {
      console.error("Unable to add inventory item:", error);
    }
  };

  return (
    <>
      <section className="new-inventory">
        <InventoryFormHeader>Add New Inventory Item</InventoryFormHeader>
        <form className="new-inventory__form" onSubmit={handleSubmit}>
          <div className="new-inventory__item-details">
            <h2>Item Details</h2>
            <label>Item Name</label>
            <input
              type="text"
              name="itemName"
              placeholder="Item Name"
              className={`new-inventory__name-input ${
                error && !itemName ? "inventory-form__input--error" : ""
              } `}
              id="itemNameInput"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
            <FormError errorState={error} field={itemName}>
              Item is required
            </FormError>
            <label>Description</label>
            <input
              type="text"
              name="description"
              placeholder="Please enter a brief item description..."
              className={`new-inventory__description-input ${
                error && !description ? "inventory-form__input--error" : ""
              }`}
              id="descriptionInput"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <FormError errorState={error} field={description}>
              Description is required
            </FormError>{" "}
            <label>Category</label>
            <div className="new-inventory__dropdown">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={`inventory-form__input inventory-form__input--select
                  ${error && !category ? "inventory-form__input--error" : ""}`}
              >
                <option value="" disabled>
                  Please select
                </option>
                <option value="electronics">Electronics</option>
                <option value="gear">Gear</option>
                <option value="apparel">Apparel</option>
                <option value="accessories">Accessories</option>
                <option value="health">Health</option>
              </select>
              <FormError errorState={error} field={category}>
                Category is required
              </FormError>
            </div>
          </div>

          <div className="new-inventory__item-avail">
            <h2>Item Availability</h2>
            <label>Status</label>
            <div className="new-inventory__radio-btns">
              <input
                type="radio"
                name="status"
                value="inStock"
                className="new-inventory__radio-btn"
                id="inStock"
                onChange={() => setStatus("inStock")}
              />
              <label htmlFor="inStock">In stock</label>

              <input
                type="radio"
                name="status"
                value="outOfStock"
                className="new-inventory__radio-btn"
                id="outOfStock"
                onChange={() => setStatus("outOfStock")}
              />
              <label htmlFor="outOfStock">Out of stock</label>
            </div>

            <label>Quantity</label>
            <input
              type="text"
              name="quantity"
              placeholder=" "
              className={`new-inventory__quantity-input ${
                error && !quantity ? "inventory-form__input--error" : ""
              }`}
              id="quantityInput"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <FormError errorState={error && !quantity} field={quantity}>
              Quantity is required
            </FormError>

            <label>Warehouse</label>
            <div className="new-inventory__dropdown">
              <select
                value={warehouse}
                onChange={(e) => setWarehouse(e.target.value)}
                className={`inventory-form__input inventory-form__input--select
                  ${error && !warehouse ? "inventory-form__input--error" : ""}`}
              >
                <option value="" disabled>
                  Please select
                </option>
                {warehouseList.map((wh) => (
                  <option key={wh.id} value={wh.id}>
                    {wh.warehouse_name}
                  </option>
                ))}
              </select>
              <FormError errorState={error} field={warehouse}>
                Warehouse is required
              </FormError>
            </div>
          </div>

          <div className="new-inventory__btns-container">
            <button
              type="button"
              className="new-inventory__btn new-inventory__btn--cancel"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="new-inventory__btn new-inventory__btn--add"
            >
              + Add Item
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default AddNewInventory;
