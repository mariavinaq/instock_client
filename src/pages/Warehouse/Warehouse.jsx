import './Warehouse.scss';
import { Routes, Route } from 'react-router-dom';
import Header from '../../components/Header/Header';
import WarehouseList from '../../components/WarehouseList/WarehouseList';
import EditWarehouseItem from '../../components/EditWarehouseItem/EditWarehouseItem';
import AddNewWarehouse from '../../components/AddNewWarehouse/AddNewWarehouse';
import WarehouseItemDetails from '../../components/WarehouseItemDetails/WarehouseItemDetails';

function Warehouse () {
    return (
        <>
        <Header/>
        <Routes>
            <Route path='/warehouse' element={<WarehouseList/>}></Route>
            <Route path='/warehouse/edit/:id' element={<EditWarehouseItem/>}></Route>
            <Route path='/warehouse/add' element={<AddNewWarehouse/>}></Route>
            <Route path='/warehouse/:id' element={<WarehouseItemDetails/>}></Route>
        </Routes>
        </>
    )
}

export default Warehouse;