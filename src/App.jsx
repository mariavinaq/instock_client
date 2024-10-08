import './App.css'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import Warehouse from './pages/Warehouse/Warehouse'
import Inventory from './pages/Inventory/Inventory'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Warehouse/>}></Route>
          <Route path='/warehouse' element={<Warehouse/>}></Route>
          <Route path='/inventory' element={<Inventory/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
