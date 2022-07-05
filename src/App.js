import React from 'react'
import Header from './components/Header'
import Home from "./pages/Home";
import Contactus from "./pages/Contactus"
import Aboutus from "./pages/Aboutus"
import { Routes, Route} from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  
  return (
    <>
      <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contactus" element={<Contactus/>} />
      <Route path="/aboutus" element={<Aboutus/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      </Routes>
    </>
  )
}

export default App