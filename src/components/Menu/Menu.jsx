import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import css from "./Menu.module.scss";
import { TfiMenu } from 'react-icons/tfi';


// import {Button} from 'flowbite-react'

function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  function handleClick(){
    setIsOpen(!isOpen)
  }
  
  return (
    <div className={css.wrapper}>
      <span className={css.logo}>
        <img src="./vite.svg" />
      </span>

      <div className={css.navlink}>
        <NavLink className={css.btn} to="/">
          Characters
        </NavLink>
        <NavLink className={css.btn} to="/Locations">
          Locations
        </NavLink>
        {/* <NavLink className={css.btn}  to="/Episodes">Episodes</NavLink> */}





      </div>


        {/* //hamburger menu for small screens */}
      {/* <div>
      <TfiMenu className={css.menu} onClick={handleClick}/>
         {isOpen?(
          <div className={css.hamburger}>
          <NavLink className={css.nav} to="/">
            Characters
          </NavLink>
          <NavLink className={css.nav} to="/Locations">
            Locations
          </NavLink>
        </div>
         ):(null)}
      </div> */}



     
      
    </div>
  );
}

export default Menu;
