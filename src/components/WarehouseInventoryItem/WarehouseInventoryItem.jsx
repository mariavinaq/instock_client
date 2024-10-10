import './WarehouseInventoryItem.scss';
import { Link, useNavigate } from 'react-router-dom';
import editIcon from '../../assets/icons/edit-24px.svg';
import deleteicon from '../../assets/icons/delete_outline-24px.svg';
import ChevronRightIcon from '../../assets/icons/chevron_right-24px.svg';

function WarehouseInventoryItem() {
    // const statusClass = inventory.status.toLowerCase() === 'in stock' ? 'in-stock' : 'out-of-stock';
    const navigate = useNavigate();

    return (
        <div className="warehouse-item">
            <div className="warehouse-item__main-container">
                <div className="warehouse-item__details-container">
                    <div className="warehouse-item__name-container">
                        <p className="warehouse-item__label-mobile">INVENTORY ITEM</p>
                        {/* <Link to={`/inventories/${inventory.id}`} className="warehouse-item__name-sub-container"> */}
                        <Link to={`/inventories`} className="warehouse-item__name-sub-container">
                            {/* <p className="warehouse-item__name">{inventory.item_name}</p> */}
                            <p className="warehouse-item__name">Placeholder</p>
                            <img src={ChevronRightIcon} alt="More details" className="warehouse-item__chevron" />
                        </Link>
                    </div>
                    <div className="warehouse-item__category-container warehouse-item__category-container">
                        <p className="warehouse-item__label-mobile">CATEGORY</p>
                        {/* <p className="warehouse-item__category">{inventory.category}</p> */}
                        <p className="warehouse-item__category">Placeholder</p>
                    </div>
                </div>
                <div className="warehouse-item__info-container">
                    <div className="warehouse-item__status-container">
                        <p className="warehouse-item__label-mobile">STATUS</p>
                        {/* <p className={`warehouse-item__status ${statusClass}`}>{inventory.status}</p> */}
                        <p className={`warehouse-item__status in-stock`}>Placeholder</p>
                    </div>
                    <div className="warehouse-item__quantity-container">
                        <p className="warehouse-item__label-mobile">QTY</p>
                        {/* <p className="warehouse-item__quantity">{inventory.quantity}</p> */}
                        <p className="warehouse-item__quantity">Placeholder</p>
                    </div>
                </div>
            </div>
            <div className="warehouse-item__actions">
                {/* <div className='warehouse-item__actions-container'> */}
                    <button aria-label="Delete item" className="warehouse-item__delete">
                        {/* <img src={deleteicon} id={inventory.id} /> */}
                        <img src={deleteicon}/>
                    </button>
                {/* </div> */}
                {/* <div className='warehouse-item__actions-container'> */}
                    <button aria-label="Delete item" className="warehouse-item__delete">
                        {/* <img src={editIcon} onClick={(() => navigate(`/inventoryPage/inventory/edit/${inventory.id}`))} /> */}
                        <img src={editIcon} onClick={(() => navigate(`/inventoryPage/inventory`))} />
                    </button>
                {/* </div> */}
            </div>
        </div>
    );
};

export default WarehouseInventoryItem;