import { Link, useNavigate } from 'react-router-dom';
import iconArrowBack from '../../assets/Icons/arrow_back-24px.svg'
import iconEdit from '../../assets/Icons/edit-white-24px.svg'
import './WarehouseInfo.scss';

function WarehouseInfo ({ warehouse }) {
    const navigate = useNavigate()

    return (
        <div className='warehouse-details'>
            <div className='warehouse-details__header'>
                <Link to='/warehouses'>
                    <img className='warehouse-details__back' src={iconArrowBack} />
                </Link>
                <h1>{warehouse.warehouse_name}</h1>
                <button className='warehouse-details__edit-button' onClick={() => navigate(`/warehouses/edit/${warehouse.id}`)}>
                    <img className='warehouse-details__edit-button-icon' src={iconEdit} />
                    <span className='warehouse-details__edit-button-label'>Edit</span>
                </button>
            </div>
            <div className='warehouse-details__about'>
                <div className='warehouse-details__address'>
                    <div className='warehouse-details__column warehouse-details__column--address'>
                        <p className='warehouse-details__label'>Warehouse Address:</p>
                        <p className='warehouse-details__data'>{warehouse.address}</p>
                    </div>
                </div>
                <div className='warehouse-details__contact'>
                    <div className='warehouse-details__column'>
                        <p className='warehouse-details__label'>Contact Name:</p>
                        <p className='warehouse-details__data'>{warehouse.contact_name}</p>
                        <p className='warehouse-details__data'>{warehouse.contact_position}</p>
                    </div>
                    <div className='warehouse-details__column'>
                        <p className='warehouse-details__label'>Contact Information:</p>
                        <p className='warehouse-details__data'>{warehouse.contact_phone}</p>
                        <p className='warehouse-details__data'>{warehouse.contact_email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WarehouseInfo;