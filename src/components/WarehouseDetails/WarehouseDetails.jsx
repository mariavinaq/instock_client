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
        </div>
    );
}

export default WarehouseDetails;