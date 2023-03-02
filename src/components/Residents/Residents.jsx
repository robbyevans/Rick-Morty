import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import css from './Residents.module.scss'
import {Card} from 'flowbite-react'

function Residents() {

  let locationId=(useParams().id);
  console.log(locationId)

  
  
  const [data, setData] = useState([])
  const [results, setResults] = useState([])


  




  useEffect(() => {
    (async function () {

      let outPut = await fetch(`https://rickandmortyapi.com/api/location/${locationId}`).then((res) => res.json());
      setData(outPut);
      
    
           let a = await Promise.all(
        outPut.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
      console.log(results)
     

    })();


    
  }, []);

  
  return (
    <div className={css.wrapper}>
                         <div className={css.heading}>
        <span className={css.secondaryText} >Location: <span className={css.red}>{data.name}</span></span>
        <span className={css.text} >Type: <span className={css.green}>{data.type}</span></span>
        <span className={css.text} >Dimension:<span className={css.red}>{data.dimension}</span></span>
        <span className={css.text} >Residents:{}</span>
      </div>
      

      {/* search component */}
      {/* <Search setNameSearch={setNameSearch} setPageNumber={setPageNumber}/> */}
      {/* search component */}

      <div className={css.body}>

        {
         results.map((data)=>{
          let{name, location, origin, gender, image, status, species}=data
            
           return( <div className={` ${css.card}`}>

             <div className="max-w-sm">
             
               <Card
                 imgAlt="picture of a Rick & Mort character"
                 imgSrc={image}
               >
                 <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                   {name}
                 </h5>
                 <p>Status: {status}</p>
                 <p>Species: {species}</p>
                 <p>Gender: {gender}</p>
                 <p className="font-normal text-gray-700 dark:text-gray-400">
                   Origin:{origin.name}
                 </p>
               </Card>
               </div>
           </div>
              )
            }
          )
        }
      </div>

      {/* <div className={css.pagination}>
        <Pagination
        count={42}
        color="primary"
        onChange={handleChange}/>
      </div> */}

    </div>
  )
}

export default Residents