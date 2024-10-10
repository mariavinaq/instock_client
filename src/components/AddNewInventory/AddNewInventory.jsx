import { useState } from "react";
import "./AddNewInventory.scss";
import backArrow from "../../assets/Icons/arrow_back-24px.svg"
import { useNavigate } from 'react-router-dom'

function AddNewInventory() {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState(""); // Add state for category
  const [warehouse, setWarehouse] = useState(""); // Add state for warehouse

  const navigate = useNavigate();

  return (
    <>
      <section className="new-inventory">
        <div className="new-inventory__header-container">
            <img className="new-inventory__back-img" src={backArrow} alt="back Link Image"  onClick={()=>navigate(-1)}/>
          <h1>Add New Inventory Item</h1>
        </div>
        <form className="new-inventory__item-details">
          <h2>Item Details</h2>
          <label>Item Name</label>
          <input
            type="text"
            name="itemName"
            placeholder="Item Name"
            className="new-inventory__name-input"
            id="itemNameInput"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <label>Descripton</label>
          <input
            type="text"
            name="description"
            placeholder="Please enter a brief item description..."
            className="new-inventory__description-input"
            id="descriptionInput"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label>Category</label>
          <div className="new-inventory__dropdown">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
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
          </div>
        </form>
        <form className="new-inventory__item-avail">
          <h2>Item Availability</h2>
          <label>Status</label>
          <div className="new-inventory__radio-btns">
            <label>
              <input
                type="radio"
                name="status"
                value="inStock"
                className="new-inventory__radio-btn"
              />
              In stock
            </label>
            <label>
              <input
                type="radio"
                name="status"
                value="outOfStock"
                className="new-inventory__radio-btn"
              />
              Out of stock
            </label>
          </div>
          <label>Quantity</label>
          <input
            type="text"
            name="quantity"
            placeholder=" "
            className="new-inventory__quantity-input"
            id="quantityInput"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <label>Warehouse</label>
          <div className="new-inventory__dropdown">
            <select
              value={warehouse}
              onChange={(e) => setWarehouse(e.target.value)}
            >
              <option value="" disabled>
                Please select
              </option>
              <option value="Manhattan">Manhattan</option>
              <option value="Washington">Washington</option>
              <option value="Jersey">Jersey</option>
              <option value="SF">SF</option>
              <option value="Santa Monica">Santa Monica</option>
              <option value="Seattle">Seattle</option>
              <option value="Miami">Miami</option>
              <option value="Boston">Boston</option>
            </select>
          </div>
        </form>
        <div className="new-inventory__btns-container">
          <button className="new-inventory__btn new-inventory__btn--cancel ">
            Cancel
          </button>
          <button className="new-inventory__btn new-inventory__btn--add">
            + Add Item
          </button>
        </div>
      </section>
    </>
  );
}

export default AddNewInventory;
