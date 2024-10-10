import { Link } from 'react-router-dom';
import iconArrowBack from '../../assets/Icons/arrow_back-24px.svg'
import iconEdit from '../../assets/Icons/edit-white-24px.svg'
import Warehouse from '../../pages/Warehouse/Warehouse';
import './WarehouseDetails.scss';

function WarehouseDetails () {
    return (
        <div className='warehouse-details'>
            <div className='warehouse-details__header'>
                <Link to='/warehouses' element={<Warehouse />}>
                    <img className='warehouse-details__back' src={iconArrowBack} />
                </Link>
                <h1>Washington</h1>
                <button className='warehouse-details__edit-button'>
                    <img className='warehouse-details__edit-button-icon' src={iconEdit} />
                    <span className='warehouse-details__edit-button-label'>Edit</span>
                </button>
            </div>
            <div className='warehouse-details__about'>
                <div className='warehouse-details__address'>
                    <div className='warehouse-details__column warehouse-details__column--address'>
                        <p className='warehouse-details__label'>Warehouse Address:</p>
                        <p className='warehouse-details__data'>33 Pearl Street SW, Washington, USA</p>
                    </div>
                </div>
                <div className='warehouse-details__contact'>
                    <div className='warehouse-details__column'>
                        <p className='warehouse-details__label'>Contact Name:</p>
                        <p className='warehouse-details__data'>Graeme Lyon</p>
                        <p className='warehouse-details__data'>Warehouse Manager</p>
                    </div>
                    <div className='warehouse-details__column'>
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