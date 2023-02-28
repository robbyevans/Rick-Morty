import React from 'react'
import css from './Search.module.scss'

function Search() {

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
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
        {/* <span>{BiSearch}</span> */}
        <button className={css.btn} type="submit">Search</button>
       </form>
      </div>
      {/* end of search component */}
    </div>
  )
}

export default Search