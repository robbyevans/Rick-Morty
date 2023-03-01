import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import css from './Characters/Characters.module.scss'
import {Card} from 'flowbite-react'

function Example2() {

  let locationId=useParams().id;
  console.log(locationId)

  
  
  const [data, setData] = useState([])
  const [results, setResults] = useState([])
  




  useEffect(() => {
    (async function () {

      let outPut = await fetch(`https://rickandmortyapi.com/api/location/${locationId}`).then((res) => res.json());
      setData(outPut.residents);
      
  
           let a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
     

    })();

     //clear data in state to prevent accumulation 

    
  }, []);
  return (
    <div className={css.wrapper}>
       {/* <div className={css.heading}>
        <span className={css.secondaryText} >Rick & Morty.</span>
        <span className={css.secondaryText} >All your Rick & morty characters in one place</span>
      </div> */}

      {/* search component */}
      {/* <Search setNameSearch={setNameSearch} setPageNumber={setPageNumber}/> */}
      {/* search component */}

      <div className={css.body}>

        {
         results.map((data)=>{
            
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

      {/* <div className={css.pagination}>
        <Pagination
        count={42}
        color="primary"
        onChange={handleChange}/>
      </div> */}

    </div>
  )
}

export default Example2