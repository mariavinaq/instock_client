import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";
import WarehouseInfo from '../../components/WarehouseInfo/WarehouseInfo';
import './WarehouseDetails.scss';
import WarehouseInventory from '../../components/WarehouseInventory/WarehouseInventory';

function WarehouseDetails() {
    const { id } = useParams();
    const [warehouseData, setWarehouseData] = useState([]);

    const getWarehouse = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/warehouses/${id}`);
            setWarehouseData(response.data);
        } catch (error) {
            console.error(`Error fetching warehouse id: ${id}`);
        }
    };

    useEffect(() => {
        getWarehouse();
    }, []);

    return (
        <>
            <WarehouseInfo warehouse={warehouseData} />
            <WarehouseInventory />
        </>
    );
}

export default WarehouseDetails;