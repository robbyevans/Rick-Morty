import React from 'react'
import {useState,useEffect} from 'react'
import {NavLink} from "react-router-dom"
import css from './Navbar.module.scss'
// import {Button} from 'flowbite-react'

function Navbar() {
  return (
    <div className={css.wrapper}>
        <span className={css.logo}>
          <img src='./vite.svg'/>
        </span>
        
          <div className={css.navlink}>
            <NavLink className={css.btn}  to="/">Characters</NavLink>
            <NavLink className={css.btn}  to="/Locations">Locations</NavLink>
            <NavLink className={css.btn}  to="/Episodes">Episodes</NavLink>
          </div>
          
    </div>
  )
}

export default Navbar