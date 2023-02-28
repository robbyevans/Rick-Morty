import React from 'react'
import {useState,useEffect} from 'react'
import {NavLink} from "react-router-dom"
import css from './Navbar.module.scss'

function Navbar() {
  return (
    <div className={css.wrapper}>
        <span className={css.logo}>logo</span>
        
          <div className={css.navlink}>
            <NavLink  to="/">Characters</NavLink>
            <NavLink  to="/Locations">Locations</NavLink>
            <NavLink  to="/Episodes">Episodes</NavLink>
          </div>
          
    </div>
  )
}

export default Navbar