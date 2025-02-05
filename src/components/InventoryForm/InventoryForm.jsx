import '../InventoryForm/InventoryForm.scss';
import axios from 'axios';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '../ButtonSecondary/ButtonSecondary';
import FormError from '../FormError/FormError';
import API_URL from '../../utils/utils';

function InventoryForm ({ data, button, warehouseId }) {
    const navigate = useNavigate();
    const { id } = useParams();

    const [ warehouseList, setWarehouseList ] = useState([]);

    const [ item, setItem ] = useState(data.item_name);
    const [ description, setDescription ] = useState(data.description);
    const [ category, setCategory ] = useState(data.category);
    const [ inStock, setInStock ] = useState(data.status);
    const [ quantity, setQuantity ] = useState(data.quantity);
    const [ warehouse, setWarehouse ] = useState(warehouseId);
    const [ error, setError ] = useState(false);
    const [ quantityValid, setQuantityValid ] = useState(true);
    
    // Get warehouse list for dropdown menu
    useEffect(() => {
        const getWarehouses = async () => {
            try {
                const response = await axios.get(`${API_URL}warehouses`);
                setWarehouseList(response.data);
            } catch (error) {
                console.error(`Error fetching data: ${error}`);
            }
        }
        getWarehouses();
    }, [id])
    
    // Change handlers
    const handleChangeItem = (event) => {
        setItem(event.target.value);
    }
    const handleChangeDescription = (event) => {
        setDescription(event.target.value)
    }
    const handleChangeCategory = (event) => {
        setCategory(event.target.value);
    }
    const handleChangeSatus = (event) => {
        setInStock(event.target.value)
    }


    useEffect(() => {
        if (inStock === "Out of Stock") {
            setQuantity("0");
        }
    }, [inStock]);

    
    useEffect (() => {
        const isValidQuantity = () => {
            const num = Number(quantity);
            if ((inStock === "In Stock") && (num <= 0 || !num)) {
                setQuantityValid(false);
                return false;
            }
            if ((inStock === "Out of Stock") && num > 0) {
                setQuantityValid(false);
                return false;
            }
            return true;
        }
        
        const quantityUpdate = isValidQuantity();
        setQuantityValid(quantityUpdate);
    }, [quantity, inStock]);

    const handleChangeQuantity = (event) => {
        setQuantity(event.target.value);
    }
    const handleChangeWarehouse = (event) => {
        setWarehouse(event.target.value);
    }

    // Validation functions
    const isFormValid = () => {
        if ( !item || !description || !category || !inStock || !quantity || !warehouse ) {
            setError(true);
            return false;
        }

        if (!quantityValid) {
            setError(true);
            return false;
        }
        return true;
    }

    // Submit form
    const handleSubmit = async (event) => {
        event.preventDefault();
        const valid = isFormValid();

        if (!valid) {
            return;
        } 
        else {
            try {
                const requestBody = {
                    "warehouse_id": Number(warehouse),
                    "item_name": item,
                    "description": description,
                    "category": category,
                    "status": inStock,
                    "quantity": quantity
                }
                if (id) {
                    axios.put(`${API_URL}inventories/${data.id}`, requestBody)
                } else {
                    axios.post(`${API_URL}inventories`, requestBody)
                }
                navigate(-1);
            } catch (error) {
                console.error("Unable to add inventory item:", error);
            }
        }
    }

    return (
        <form className='inventory-form' onSubmit={handleSubmit}>
            <section className='inventory-form__content'>
                <div className='inventory-form__section'>
                    <h2 className='inventory-form__subheader'>Item Details</h2>
                    
                    <label className='inventory-form__label' htmlFor='name'>Item Name</label>
                    <input 
                        type='text'
                        name='name'
                        value={item}
                        placeholder={item || "Item name"}
                        onChange={handleChangeItem}
                        className={
                            `inventory-form__input 
                            ${error && !item ? "inventory-form__input--error" : ""}`
                        }
                    />
                    <FormError errorState={error} field={item}>Item is required</FormError>

                    <label className='inventory-form__label' htmlFor='description'>Description</label>
                    <textarea
                        name='description'
                        value={description}
                        onChange={handleChangeDescription}
                        placeholder={description || "Please enter a brief item description..."}
                        className={
                            `inventory-form__textarea
                            ${error && !description ? "inventory-form__textarea--error" : ""}`
                        }
                    />
                    <FormError errorState={error} field={description}>Description is required</FormError>


                    <label className='inventory-form__label' htmlFor='category'>Category</label>
                    <select
                        name='category'
                        value={category}
                        onChange={handleChangeCategory}
                        className={
                            `inventory-form__input inventory-form__input--select
                            ${error && !category ? 'inventory-form__input--error' : ""}`
                        }
                    >
                        {!category && <option value="">Please select</option> }
                        <option value="Accessories">Accessories</option>
                        <option value="Apparel">Apparel</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Gear">Gear</option>
                        <option value="Health">Health</option>
                    </select>
                    <FormError errorState={error} field={category}>Category is required</FormError>
                </div>

                <div className='inventory-form__section inventory-form__section--2'>
                    <h2 className='inventory-form__subheader'>Item Availability</h2>

                    <label className='inventory-form__label' htmlFor='status'>Status</label>
                    <div className='inventory-form__radio-container'>
                        <div className='inventory-form__radio-option'>
                            <input
                                type='radio'
                                id='in-stock'
                                name='status'
                                value="In Stock"
                                onClick={handleChangeSatus}
                                defaultChecked={inStock === "In Stock" ? true : false}
                                />
                            <label htmlFor='in-stock' className='inventory-form__radio'>In stock</label>
                        </div>
                        <div className='inventory-form__radio-option'>
                            <input
                                type='radio'
                                id='out-of-stock'
                                name='status'
                                value="Out of Stock"
                                onClick={handleChangeSatus}
                                defaultChecked={inStock === "Out of Stock" ? true : false}
                            />
                            <label htmlFor='out-of-stock' className='inventory-form__radio'>Out of stock</label>
                        </div>
                    </div>
                    <div 
                        className={
                            `inventory-form__quantity 
                            ${inStock === "Out of Stock" ? 'inventory-form__quantity--hidden' : ""}`
                        }>
                        <label className='inventory-form__label' htmlFor='quantity'>Quantity</label>
                        <input
                            type='text'
                            name='quantity'
                            value={quantity}
                            onChange={handleChangeQuantity}
                            placeholder='0'
                            className={
                                `inventory-form__input
                                ${error && !quantity ? 'inventory-form__input--error' : ""}`
                            }
                            />
                    </div>
                    <FormError errorState={error} field={quantityValid}>Invalid quantity</FormError>

                    <label htmlFor='warehouse' className='inventory-form__label'>Warehouse</label>
                    <select
                        name='warehouse'
                        value={warehouse}
                        onChange={handleChangeWarehouse}
                        className={
                            `inventory-form__input inventory-form__input--select
                            ${error && !warehouse ? 'inventory-form__input--error' : ""}`
                        }
                    >
                        {!warehouse && <option value="">Please select</option> }
                        {warehouseList.map((warehouse) => {
                            return (
                                <option
                                    key={warehouse.id}
                                    value={warehouse.id}
                                >{warehouse.warehouse_name}</option>
                            )
                        })}
                    </select>
                    <FormError errorState={error} field={warehouse}>Warehouse is required</FormError>

                </div>
            </section>
            <section className='inventory-form__buttons'>
                <div 
                    className='inventory-form__button-wrapper' 
                    onClick={() => navigate(-1)}
                >
                    <ButtonSecondary>Cancel</ButtonSecondary>
                </div>
                <div
                    className='inventory-form__button-wrapper'
                    onClick={handleSubmit}
                >
                    <ButtonPrimary>{button}</ButtonPrimary>
                </div>
            </section>
        </form>
    );
}

export default InventoryForm;