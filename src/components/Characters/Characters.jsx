import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import css from './Characters.module.scss'
import {Card} from 'flowbite-react'
import Pagination from "@mui/material/Pagination"
import Search from '../Search/Search';


function Characters() {
  
  const [pageNumber, setPageNumber] = useState(1);
  const [nameSearch, setNameSearch] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  const [data, setData] = useState([]);
  const [locationID, setlocationID] = useState("")
  let [results, setResults] = React.useState([]);
  
  //location filter
  // setlocationID(locationId)
  let locationId=useParams();
  useEffect(()=>{
    setlocationID(locationId.id)
    console.log(locationID)
  },[locationId])


  //test facility do not tamper !!! dangerous


//  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${nameSearch}&status=${status}&gender=${gender}&species=${species}`;

//   useEffect(()=>{

//     if(locationID){
//       console.log("data from location card is firing now"),
//       (async function () {
//           let data = await fetch(`https://rickandmortyapi.com/api/location/${locationID}`).then((res) => res.json());
//             // setData(data.residents);
//             // console.log(data)
//             // console.log(data.residents)
//               let a = await Promise.all(
//           data.residents.map((x) => {
//            return fetch(x).then((res) => res.json());
//          })
//        );
//       setData(a);
//           })();
//           // setlocationID(false)
       
//     }
//     else{
//       console.log("Data form api/characters is firing"),
//       (async function () {
//         let data = await fetch(api).then((res) => res.json());
//         setData(data.results);
//       })();
//       // setlocationID(false)
//     }
//   },[locationId])

//   console.log(data)
//   // console.log(results)

// //*****//end of test facility///**** */


 

  
  
 

//pagination
  function handleChange(e,p){
    console.log(e,p)
    setPageNumber(p)
  }
  

/***solid plan dont touch */
  {const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${nameSearch}&status=${status}&gender=${gender}&species=${species}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setData(data.results);
    })();
    setlocationID(false)
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
      {/* search component */}

      <div className={css.body}>

        {
         data.map((data)=>{
            
           return( <div className={` ${css.card}`}>
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

export default Characters

