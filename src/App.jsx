import { useState } from 'react'
import "./App.scss";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from "react";

import HomePage from "./pages/HomePage/HomePage.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
