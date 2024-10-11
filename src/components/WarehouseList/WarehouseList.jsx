import WarehouseItem from "../WarehouseItem/WarehouseItem";
import SortIcon from "../../assets/Icons/sort-24px.svg";
import "./WarehouseList.scss";
import { useEffect, useState } from "react";

function WarehouseList({
  warehouses,
  results,
  handleOpenWarehouseModal,
  keyword,
}) {
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    if (keyword) {
      setIsSearch(true);
    } else {
      setIsSearch(false);
    }
  }, [keyword]);

  return (
    <>
      <section className="warehouse-list-section">
        <div className="warehouse-list-section__labels">
          <div className="warehouse-list-section__label-container warehouse-list-section__label-container-name">
            <div className="warehouse-list-section__label">WAREHOUSE</div>
            <img
              src={SortIcon}
              alt="Sort"
              className="warehouse-list-section__label-img"
            />
          </div>
          <div className="warehouse-list-section__label-container warehouse-list-section__label-container-address">
            <div className="warehouse-list-section__label">ADDRESS</div>
            <img
              src={SortIcon}
              alt="Sort"
              className="warehouse-list-section__label-img"
            />
          </div>

          <div className="warehouse-list-section__label-container warehouse-list-section__label-container-name">
            <div className="warehouse-list-section__label">CONTACT NAME</div>
            <img
              src={SortIcon}
              alt="Sort"
              className="warehouse-list-section__label-img"
            />
          </div>
          <div className="warehouse-list-section__label-container warehouse-list-section__label-container-info">
            <div className="warehouse-list-section__label">
              CONTACT INFORMATION
            </div>
            <img
              src={SortIcon}
              alt="Sort"
              className="warehouse-list-section__label-img"
            />
          </div>
          <div className="warehouse-list-section__label-container">
            <div className="warehouse-list-section__label">ACTIONS</div>
          </div>
        </div>
        <ul className="warehouse-list">
          {(isSearch ? results : warehouses).map((item) => (
            <WarehouseItem
              key={item.id}
              warehouse={item}
              handleOpenWarehouseModal={handleOpenWarehouseModal}
            />
          ))}
        </ul>
      </section>
    </>
  );
}

export default WarehouseList;
