import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Characters from './components/Characters/Characters'
import Locations from './components/Locations/Locations'
import Episodes from './components/Episodes/Episodes';
import './global.scss'
import './Index.css'
import Foot from './components/Footer/Foot';
import Residents from './components/Residents/Residents';
import BasicModal from './components/Modal/BasicModal';

function App() {

 
 

  return (
    <>
    <Router>
      <Navbar/>
      <Hero/>
      <Routes>
        <Route path='/' element={<Characters />}/>
        <Route path='/Locations' element={<Locations />}/>
        <Route path="/Location/:id" element={<Residents />}/>
        <Route path='/Episodes' element={<Episodes/>}/>
      </Routes>
      <Foot/>
      {/* <BasicModal/> */}
      

    </Router>
    </>
  )
}

export default App


