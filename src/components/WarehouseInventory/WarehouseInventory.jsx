import './WarehouseInventory.scss';
import SortIcon from '../../assets/Icons/sort-24px.svg'
import WarehouseInventoryItem from '../WarehouseInventoryItem/WarehouseInventoryItem';

function WarehouseInventory() {
    return (
        <section className="warehouse-inventory">
            <div className="warehouse-inventory__labels">
                <div className="warehouse-inventory__label-container warehouse-inventory__label-container--inventory">
                    <div className="warehouse-inventory__label">INVENTORY ITEM</div>
                    <img src={SortIcon} alt="Sort" className="warehouse-inventory__sort" />
                </div>
                <div className="warehouse-inventory__label-container warehouse-inventory__label-container--category">
                    <div className="warehouse-inventory__label">CATEGORY</div>
                    <img src={SortIcon} alt="Sort" className="warehouse-inventory__sort" />
                </div>
                <div className="warehouse-inventory__label-container warehouse-inventory__label-container--status">
                    <div className="warehouse-inventory__label">STATUS</div>
                    <img src={SortIcon} alt="Sort" className="warehouse-inventory__sort" />
                </div>
                <div className="warehouse-inventory__label-container warehouse-inventory__label-container--quantity">
                    <div className="warehouse-inventory__label">QUANTITY</div>
                    <img src={SortIcon} alt="Sort" className="warehouse-inventory__sort" />
                </div>
                <div className="warehouse-inventory__label-container warehouse-inventory__label-container--actions">
                    <div className="warehouse-inventory__label">ACTIONS</div>
                </div>
            </div>
            <ul className="warehouse-inventory__items">
                    {/* {inventories.map((item) => (
                        <InventoryItem
                            key={item.id}
                            inventory={item}
                        />
                    ))} */}
                    <WarehouseInventoryItem />
                </ul>
        </section>
    );
}

export default WarehouseInventory;