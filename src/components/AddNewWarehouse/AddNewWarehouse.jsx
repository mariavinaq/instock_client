import './AddNewWarehouse.scss';
import Header from '../../components/Header/Header';

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
    }

    return (
        <div className='addWarehouse'>
            <h1 className='addWarehouse__title'></h1>
            <form onSubmit={postWarehouse} className='addwarehouse__form'>
                <div className='addWarehouse__form-title'>
                    <h2 className='addWarehouse__details'>Warehouse Details</h2>

                    <label className='addWarehouse__form-label' htmlFor='warehouse_name'></label>
                    <input className='addWarehouse__form-input' name='warehouse_name' id='warehouse_name'></input>

                    <label className='addWarehouse__form-label' htmlFor='address'></label>
                    <input className='addWarehouse__form-input' name='address' id='address'></input>

                    <label className='addWarehouse__form-label' htmlFor='city'></label>
                    <input className='addWarehouse__form-input' name='city' id='city'></input>

                    <label className='addWarehouse__form-label' htmlFor='country'></label>
                    <input className='addWarehouse__form-input' name='country' id='country'></input>
                </div>

                <div className='addWarehouse__form-title'>
                    <h2 className='addWarehouse__form-title'>Contact Details</h2>
                    
                    <label className='addWarehouse__form-label' htmlFor='contact_name'></label>
                    <input className='addWarehouse__form-input' name='contact_name' id='contact_name'></input>

                    <label className='addWarehouse__form-label' htmlFor='contact_position'></label>
                    <input className='addWarehouse__form-input' name='contact_position' id='contact_position'></input>

                    <label className='addWarehouse__form-label' htmlFor='contact_phone'></label>
                    <input className='addWarehouse__form-input' name='contact_phone' id='contact_phone'></input>

                    <label className='addWarehouse__form-label' htmlFor='contact_email'></label>
                    <input className='addWarehouse__form-input' name='contact_email' id='contact_email'></input>
                </div>

                <div>
                    <button></button>
                    <button></button>
                </div>
            </form>
        </div>
    )
}

export default AddNewWarehouse;