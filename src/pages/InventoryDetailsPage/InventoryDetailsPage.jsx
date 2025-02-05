import React from "react";
import "./InventoryDetailsPage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Edit from "../../assets/Icons/edit-white-24px.svg";
import BackArrow from "../../assets/Icons/arrow_back-24px.svg";
import InventoryItemDetails from "../../components/InventoryItemDetails/InventoryItemDetails";
import API_URL from "../../utils/utils";

function InventoryDetailsPage() {
  const { id } = useParams();
  const [inventoryDetails, setInventoryDetails] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(
          `${API_URL}inventories/${id}`
        );
        setInventoryDetails(response.data);
      } catch (error) {
        console.error(`Error fetching data: ${error}`);
      }
    };

    fetchDetails();
  }, [id]);

  return (
    <>
      <section className="inventory-details-page">
        <div className="inventory-details-header">
          <div className="inventory-details-header__nav">
            <img
              src={BackArrow}
              alt="Back Arrow"
              className="inventory-details-header__nav-arrow"
              onClick={() => navigate(-1)}
            />
            <h1 className="inventory-details-header__nav-current">
              {inventoryDetails.item_name}
            </h1>
          </div>
          <Link
            to={`/inventories/edit/${id}`}
            className="inventory-details-header__btn-container"
          >
            <button className="inventory-details-header__btn">
              <img
                className="inventory-details-header__btn-edit"
                src={Edit}
                alt="Edit"
              />
              <div className="inventory-details-header__btn-text">Edit </div>
            </button>
          </Link>
        </div>
        <InventoryItemDetails details={inventoryDetails} />
      </section>
    </>
  );
}

export default InventoryDetailsPage;
