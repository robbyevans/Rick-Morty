import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import css from './Search.module.scss'

function Search({setNameSearch, setPageNumber}) {

  function handleSubmit(e){
    e.preventDefault();

  }

  return (
    <div>
      {/* <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
     
    </Box> */}
      
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
        <button className={css.btn} type="submit">Search</button>
       </form>
      </div>
      {/* end of search component */}
    </div>
  )
}

export default Search


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// export default function BasicTextFields() {
//   return (
//     <Box
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <TextField id="outlined-basic" label="Outlined" variant="outlined" />
//       <TextField id="filled-basic" label="Filled" variant="filled" />
//       <TextField id="standard-basic" label="Standard" variant="standard" />
//     </Box>
//   );
// }