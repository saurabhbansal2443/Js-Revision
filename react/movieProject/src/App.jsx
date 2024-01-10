import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Favourite from './Favourite'
import { Route , Routes } from 'react-router-dom'



const App = () => {
  return (
    <div >
      <Navbar></Navbar>

      <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/favourite" element={<Favourite></Favourite>} ></Route>
      </Routes>
     
    
    </div>
  )
}

export default App