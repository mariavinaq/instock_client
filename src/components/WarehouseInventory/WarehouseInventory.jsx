import './WarehouseInventory.scss';
import SortIcon from '../../assets/Icons/sort-24px.svg'
import WarehouseInventoryItem from '../WarehouseInventoryItem/WarehouseInventoryItem';

function WarehouseInventory({ inventory, handleOpenInventoryModal }) {
    return (
        <section className="warehouse-inventory">
            <div className="warehouse-inventory__labels">
                <div className="warehouse-inventory__label-container warehouse-inventory__label-container--inventory">
                    <div className="warehouse-inventory__label">Inventory Item</div>
                    <img src={SortIcon} alt="Sort" className="warehouse-inventory__sort" />
                </div>
                <div className="warehouse-inventory__label-container warehouse-inventory__label-container--category">
                    <div className="warehouse-inventory__label">Category</div>
                    <img src={SortIcon} alt="Sort" className="warehouse-inventory__sort" />
                </div>
                <div className="warehouse-inventory__label-container warehouse-inventory__label-container--status">
                    <div className="warehouse-inventory__label">Status</div>
                    <img src={SortIcon} alt="Sort" className="warehouse-inventory__sort" />
                </div>
                <div className="warehouse-inventory__label-container warehouse-inventory__label-container--quantity">
                    <div className="warehouse-inventory__label">Quantity</div>
                    <img src={SortIcon} alt="Sort" className="warehouse-inventory__sort" />
                </div>
                <div className="warehouse-inventory__label-container warehouse-inventory__label-container--actions">
                    <div className="warehouse-inventory__label">Actions</div>
                </div>
            </div>
            <ul className="warehouse-inventory__items">
                    {inventory.map(item => <WarehouseInventoryItem key={item.id} item={item} handleOpenInventoryModal={handleOpenInventoryModal} />)}
                </ul>
        </section>
    );
}

export default WarehouseInventory;