import iconArrowBack from '../../assets/Icons/arrow_back-24px.svg'
import iconEdit from '../../assets/Icons/edit-white-24px.svg'
import './WarehouseDetails.scss';

function WarehouseDetails () {
    return (
        <div className='warehouse-details'>
            <div className='warehouse-details__header'>
                <img className='warehouse-details__back' src={iconArrowBack} />
                <h1>Washington</h1>
                <button className='warehouse-details__edit-button'>
                    <img className='warehouse-details__edit-button-icon' src={iconEdit} />
                    
                </button>
            </div>
            <div className='warehouse-details__about'>
                <div className='warehouse-details__address'>
                    <p className='warehouse-details__label'>Warehouse Address:</p>
                    <p className='warehouse-details__data'>33 Pearl Street SW, Washington, USA</p>
                </div>
                <div className='warehouse-details__contact'>
                    <div className='warehouse-details__contact-column'>
                        <p className='warehouse-details__label'>Contact Name:</p>
                        <p className='warehouse-details__data'>Graeme Lyon</p>
                        <p className='warehouse-details__data'>Warehouse Manager</p>
                    </div>
                    <div className='warehouse-details__contact-column'>
                        <p className='warehouse-details__label'>Contact Information:</p>
                        <p className='warehouse-details__data'>+1 (647) 504-0911</p>
                        <p className='warehouse-details__data'>glyon@instock.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WarehouseDetails;