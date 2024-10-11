import './EditWarehouseItem.scss';

function EditWarehouseItem () {
    return (
        <div className='addWarehouse'>
            <div className='addWarehouse__empty'></div>
            <div className='addWarehouse__header'>
                <Link to={"/"}>
                    <img className='addWarehouse__header-icon' src={arrowBack} alt='arrowBack'></img>    
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

export default EditWarehouseItem;