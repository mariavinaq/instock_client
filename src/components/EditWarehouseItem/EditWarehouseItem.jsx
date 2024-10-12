import './EditWarehouseItem.scss';
import arrowBack from '../../assets/Icons/arrow_back-24px.svg'
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

function EditWarehouseItem () {


    return (
        <div className='editWarehouse'>
            <div className='editWarehouse__empty'></div>
            <div className='editWarehouse__header'>
                <Link to={"/"}>
                    <img className='editWarehouse__header-icon' src={arrowBack} alt='arrowBack'></img>    
                </Link>
                
                <h1 className='editWarehouse__header-itle'>Edit Warehouse</h1>
            </div>
            <div className='editWarehouse__formWrapper'>
               <form className='editWarehouse__form'>

                <div className='editWarehouse__form-sections'>
                   <div className='editWarehouse__form-section editWarehouse__form-warehouse'>
                    <h2 className='editWarehouse__form-details'>Warehouse Details</h2>

                    <label className='editWarehouse__form-label' htmlFor='warehouse_name'>Warehouse Name</label>
                    <input className='editWarehouse__form-input' name='warehouse_name' id='warehouse_name' placeholder='Warehouse Name'></input>

                    <label className='editWarehouse__form-label' htmlFor='address'>Street Name</label>
                    <input className='editWarehouse__form-input' name='address' id='address' placeholder='Street Name'></input>

                    <label className='editWarehouse__form-label' htmlFor='city'>City</label>
                    <input className='editWarehouse__form-input' name='city' id='city' placeholder='City'></input>

                    <label className='editWarehouse__form-label' htmlFor='country'>Country</label>
                    <input className='editWarehouse__form-input' name='country' id='country' placeholder='Country'></input>
                    </div>

                    <div className='editWarehouse__form-section editWarehouse__form-contactDetails'>
                    <h2 className='editWarehouse__form-details'>Contact Details</h2>
                    
                    <label className='editWarehouse__form-label' htmlFor='contact_name'>Contact Name</label>
                    <input className='editWarehouse__form-input' name='contact_name' id='contact_name' placeholder='Contact Name'></input>

                    <label className='editWarehouse__form-label' htmlFor='contact_position'>Position</label>
                    <input className='editWarehouse__form-input' name='contact_position' id='contact_position' placeholder='Position'></input>

                    <label className='editWarehouse__form-label' htmlFor='contact_phone'>Phone Number</label>
                    <input className='editWarehouse__form-input' name='contact_phone' id='contact_phone' placeholder='Phone Number'></input>

                    <label className='editWarehouse__form-label' htmlFor='contact_email'>Email</label>
                    <input className='editWarehouse__form-input' name='contact_email' id='contact_email' placeholder='Email'></input>
                    </div> 
                </div>
                
                <div className='editWarehouse__form-buttons'>
                    <button className='editWarehouse__form-button editWarehouse__form-cancel' type="button">Cancel</button>
                    <button className='editWarehouse__form-button editWarehouse__form-add' type='submit'>+ Edit Warehouse</button>
                </div>
                </form> 
            </div>
            
        </div>
    )
}

export default EditWarehouseItem;