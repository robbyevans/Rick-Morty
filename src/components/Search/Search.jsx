import React from 'react'
import css from './Search.module.scss'
import { BiSearchAlt2 } from "react-icons/bi";

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

        <button  type="submit">
        <BiSearchAlt2 className="mr-2 h-5 w-5" />
          Search</button>
       </form>
      </div>
      {/* end of search component */}
    </div>
  )
}

export default Search
