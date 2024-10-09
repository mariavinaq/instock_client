import './AddNewWarehouse.scss';

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
        <>
            <form onSubmit={postWarehouse}>

            </form>
        </>
    )
}

export default AddNewWarehouse;