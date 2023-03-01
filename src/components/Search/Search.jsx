import React from 'react'
import css from './Search.module.scss'
import {Button} from 'flowbite-react'

function Search({setNameSearch, setPageNumber}) {

  function handleSubmit(e){
    e.preventDefault();

  }

  return (
    <div>
         
      
           {/* search component */}
           <div className={css.searchbar}>
       <form onSubmit={handleSubmit} className={css.formcontrol}>
        <input
        type='text'
        placeholder="Search for characters"
        onChange={(e)=>{setNameSearch(e.target.value),
          setPageNumber(1);}}
        />
        {/* <span>{BiSearch}</span> */}
        <div>
  </div>
        <button className={css.btn} type="submit">Search</button>
       </form>
      </div>
      {/* end of search component */}
    </div>
  )
}

export default Search
