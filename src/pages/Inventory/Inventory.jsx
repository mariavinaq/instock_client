import './Inventory.scss';
import { Route, Routes } from 'react-router-dom';
import Header from '../../components/Header/Header';
import InventoryList from '../../components/InventoryList/InventoryList';
import InventoryItemDetails from '../../components/InventoryItemDetails/InventoryItemDetails';
import EditInventoryItem from '../../components/EditInventoryItem/EditInventoryItem';
import AddNewInventory from '../../components/AddNewInventory/AddNewInventory';

function Inventory () {
    return (
        <>
        <Header/>
        <Routes>
            <Route path='/inventory' element={<InventoryList/>}></Route>
            <Route path='/inventory/edit/:id' element={<EditInventoryItem/>}></Route>
            <Route path='/inventory/add' element={<AddNewInventory/>}></Route>
            <Route path='/inventory/:id' element={<InventoryItemDetails/>}></Route>
        </Routes>
        </>
    )
}

export default Inventory;