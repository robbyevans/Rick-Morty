import React, { useState,useEffect } from 'react'
import css from './Locations.module.scss'
import { Card } from 'flowbite-react';
import Pagination from "@mui/material/Pagination"

function Locations() {
  let [results, setResults] = React.useState([]);
  let [number, setNumber] = useState(1);
  let[data,setData]=useState([]);
  let [pageNumber, setPageNumber] = useState(1);
  // let[member,setMember]=useState([])


  let api = `https://rickandmortyapi.com/api/location/${number}/?page=${pageNumber}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setData(data);

      let a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);


  function handleChange(e,p){
    setPageNumber(p)
  }

  return (
    <div className={css.wrapper}>
  <div className={css.heading}>
        <span className={css.secondaryText} >Location:{data.name}</span>
        <span className={css.secondaryText} >Dimension:{data.dimension}</span>
        <span className={css.secondaryText} >Type:{data.type}</span>
      </div>  
  <div className={css.body}>


  {
    results.map((data)=>{
    console.log(data)
    return( <div className={css.card}>
     <div className="max-w-sm">
       <Card
         imgAlt="picture of a Rick & Mort character"
         imgSrc={data.image}
       >
         <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
           {data.name}
         </h5>
         <p>Status: {data.status}</p>
         <p>Species: {data.species}</p>
         <p>Gender: {data.gender}</p>
         <p className="font-normal text-gray-700 dark:text-gray-400">
           Origin:{data.origin.name}
         </p>
       </Card>
       </div>
   </div>
      )
    }
  )
  }
    </div>
    <div className={css.pagination}>
        <Pagination
        count={42}
        color="primary"
        onChange={handleChange}/>
      </div>
    </div>
  )
}

export default Locations