import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import css from './Characters.module.scss'
import {Card} from 'flowbite-react'
import Pagination from "@mui/material/Pagination"
import Search from '../Search/Search';
import Filter from '../Filter/Filter'


function Characters() {
  
  const [pageNumber, setPageNumber] = useState(1);
  const [nameSearch, setNameSearch] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  const [data, setData] = useState([]);
  let [results, setResults] = React.useState([]);
  




      //pagination
         function handleChange(e,p){
             setPageNumber(p)
           }


  /*on loading */
  {const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${nameSearch}&status=${status}&gender=${gender}&species=${species}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setData(data.results);
    })();

  }, [api]);
  }



  return (
    <div className={css.wrapper}>
       <div className={css.heading}>
        <span className={css.secondaryText} >Rick & Morty.</span>
        <span className={css.secondaryText} >All your Rick & morty characters in one place</span>
      </div>

      {/* search component */}
      <Search setNameSearch={setNameSearch} setPageNumber={setPageNumber}/>

      {/* filter component */}
      <Filter/>


      <div className={css.body}>

        {
         data && data.map((data)=>{
            
           return( <div className={` ${css.card}`}>
             <div className="max-w-sm">
               <Card
                 imgAlt="picture of a Rick & Mort character"
                 imgSrc={data.image}
               >
                  {/* test facility */}
                  {(() => {
          if (data.status === "Dead") {
            return <div className={`${css.badge} redColor `}>{data.status}</div>;
          }
           else if (data.status === "Alive") {
            return <div className={`${css.badge} greenColor `}>{data.status}</div>;
          } 
          else {
            return <div className={` ${css.badge} greyColor `}>{data.status}</div>;
          }
        })()}
                  {/* end of test facility */}


                 <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                   {data.name}
                 </h5>
                 {/* <p>Status: {data.status}</p> */}
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

export default Characters

