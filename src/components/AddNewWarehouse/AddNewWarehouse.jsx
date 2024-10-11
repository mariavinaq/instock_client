import './AddNewWarehouse.scss';
import Header from '../../components/Header/Header';
import arrowBack from '../../assets/Icons/arrow_back-24px.svg'
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

function AddNewWarehouse () {
    //this is the handleSubmit function for the form 

    async function postWarehouse(event) {
        event.preventDefault();
        const newWarehouse = {
            warehouse_name: event.target.warehouse_name.value, 
            address: event.target.address.value, 
            city: event.target.city.value, 
            country: event.target.country.value, 
            contact_name: event.target.contact_name.value, 
            contact_position: event.target.contact_position.value, 
            contact_phone: event.target.contact_phone.value, 
            contact_email: event.target.contact_email.value
        }

       const response = await axios.post("http://localhost:8080/warehouses", newWarehouse)

       form.reset();
    }

    const navigate = useNavigate();
    
    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     try {
    //     await postWarehouse(event);
    //     navigate(-1); // Go back one page in the history
    //     } catch (error) {
    //     console.error('Error submitting form:', error);
    //     }
    // };

    const handleReset = () => {
        const form = document.querySelector('.addwarehouse__form');
        if (form) {
          form.reset();
        }
      };

    return (
        <div className='addWarehouse'>
            <div className='addWarehouse__empty'></div>
            <div className='addWarehouse__header'>
                <Link to={"/"}>
                    <img className='addWarehouse__header-icon' src={arrowBack} alt='arrowBack for add new warehouse title'></img>    
                </Link>
                
                <h1 className='addWarehouse__header-itle'>Add New Warehouse</h1>
            </div>
            <div className='addWarehouse__formWrapper'>
               <form onSubmit={postWarehouse} className='addwarehouse__form'>

                <div className='addWarehouse__form-sections'>
                   <div className='addWarehouse__form-section addWarehouse__form-warehouse'>
                    <h2 className='addWarehouse__form-details'>Warehouse Details</h2>

                    <label className='addWarehouse__form-label' htmlFor='warehouse_name'>Warehouse Name</label>
                    <input className='addWarehouse__form-input' name='warehouse_name' id='warehouse_name' placeholder='Warehouse Name'></input>

                    <label className='addWarehouse__form-label' htmlFor='address'>Street Name</label>
                    <input className='addWarehouse__form-input' name='address' id='address' placeholder='Street Name'></input>

                    <label className='addWarehouse__form-label' htmlFor='city'>City</label>
                    <input className='addWarehouse__form-input' name='city' id='city' placeholder='City'></input>

                    <label className='addWarehouse__form-label' htmlFor='country'>Country</label>
                    <input className='addWarehouse__form-input' name='country' id='country' placeholder='Country'></input>
                    </div>

                    <div className='addWarehouse__form-section addWarehouse__form-contactDetails'>
                    <h2 className='addWarehouse__form-details'>Contact Details</h2>
                    
                    <label className='addWarehouse__form-label' htmlFor='contact_name'>Contact Name</label>
                    <input className='addWarehouse__form-input' name='contact_name' id='contact_name' placeholder='Contact Name'></input>

                    <label className='addWarehouse__form-label' htmlFor='contact_position'>Position</label>
                    <input className='addWarehouse__form-input' name='contact_position' id='contact_position' placeholder='Position'></input>

                    <label className='addWarehouse__form-label' htmlFor='contact_phone'>Phone Number</label>
                    <input className='addWarehouse__form-input' name='contact_phone' id='contact_phone' placeholder='Phone Number'></input>

                    <label className='addWarehouse__form-label' htmlFor='contact_email'>Email</label>
                    <input className='addWarehouse__form-input' name='contact_email' id='contact_email' placeholder='Email'></input>
                    </div> 
                </div>
                
                <div className='addWarehouse__form-buttons'>
                    <button className='addWarehouse__form-button addWarehouse__form-cancel' type="button" onClick={handleReset}>Cancel</button>
                    <button className='addWarehouse__form-button addWarehouse__form-add' type='submit'>+ Add Warehouse</button>
                </div>
                </form> 
            </div>
            
        </div>
    )
}

export default AddNewWarehouse;