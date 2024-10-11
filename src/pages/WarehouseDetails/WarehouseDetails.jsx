import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";
import WarehouseInfo from '../../components/WarehouseInfo/WarehouseInfo';
import WarehouseInventory from '../../components/WarehouseInventory/WarehouseInventory';
import './WarehouseDetails.scss';

function WarehouseDetails() {
    const { id } = useParams();
    const [warehouseData, setWarehouseData] = useState([]);
    // const [warehouseInventory, setWarehouseInventory] = useState([]);

    const getWarehouse = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/warehouses/${id}`);
            setWarehouseData(response.data);
        } catch (error) {
            console.error(`Error fetching warehouse id: ${id}`);
        }
    };

    // const getWarehouseInventory = async () => {
    //     try {
    //         const response = await axios.get(`http://localhost:8080/warehouses/${id}/inventories`);
    //         setWarehouseInventory(response.data);
    //     } catch (error) {
    //         console.error(`Error fetching warehouse inventory id: ${id}`);
    //     }
    // };

    useEffect(() => {
        getWarehouse();
        // getWarehouseInventory();
    }, []);

    return (
        <>
            <WarehouseInfo warehouse={warehouseData} />
            {/* <WarehouseInventory inventory={warehouseInventory} /> */}
            <WarehouseInventory />
        </>
    );
}

export default WarehouseDetails;