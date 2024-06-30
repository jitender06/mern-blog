import { useState } from 'react'
import {BrowserRouter, Route, Routes } from "react-router-dom"
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
