import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Characters from './components/Characters/Characters'
import Locations from './components/Locations/Locations'
import './global.module.scss'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Hero/>
      <Routes>
        <Route path='/Locations' element={<Locations/>}/>
        <Route path='/Characters' element={<Characters/>}/>
      </Routes>

    </Router>
    </>
  )
}

export default App