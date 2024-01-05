import React , {useState} from 'react';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import {Routes , Route } from "react-router-dom";


const App = () => {
  let [theme , setTheme ] = useState("light");
  return (
    <>
    <Navbar themeObj = {{theme , setTheme }}></Navbar>
    <Routes>
      <Route path="/" element={<Home></Home>} ></Route>
      <Route path="/project" element={<Projects></Projects>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/about" element={<About></About>} ></Route>
    </Routes>
    </>
  )
}

export default App