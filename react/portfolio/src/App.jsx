import React , {useState} from 'react';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Myid from './Myid';
import {Routes , Route } from "react-router-dom";


const App = () => {
  let [theme , setTheme ] = useState("light");
  return (
    <>
    <Navbar themeObj = {{theme , setTheme }}></Navbar>
    <Routes>
      <Route   path="/" element={<Home theme={theme}></Home>} ></Route>
      <Route   path="/project" element={<Projects theme={theme}></Projects>}></Route>
      <Route   path="/contact" element={<Contact theme={theme}></Contact>}></Route>
      <Route   path="/about" element={<About theme={theme}></About>} ></Route>
      <Route path="/about/:resID" element={<Myid></Myid>}></Route>
    </Routes>
    </>
  )
}

export default App