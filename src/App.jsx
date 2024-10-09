import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Warehouse from './pages/Warehouse/Warehouse'
import Inventory from './pages/Inventory/Inventory'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Warehouse/>}></Route>
          <Route path='/warehousePage/*' element={<Warehouse/>}></Route>
          <Route path='/inventoryPage/*' element={<Inventory/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
