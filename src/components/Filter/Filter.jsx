import React from 'react'
import css from './Filter.module.scss'
import { BsFilterRight } from 'react-icons/bs';

function Filter() {

  function handleClick(){

  }
  return (
    <div className={css.wrapper}>
      <button onClick={handleClick}>
        <BsFilterRight className={css.icon}/>
        </button>
    
    </div>
  )
}

export default Filter