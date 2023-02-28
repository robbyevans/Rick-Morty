import React,{useState,useEffect} from 'react'
import css from './Characters.module.scss'
import {Card} from 'flowbite-react'
import Search from '../Search/Search';


function Characters() {

  let [pageNumber, updatePageNumber] = useState(1);
  let [nameSearch, setNameSearch] = useState("");
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");
  let [data, setData] = useState([]);
  


  let link = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${nameSearch}&status=${status}&gender=${gender}&species=${species}`;
  useEffect(()=>{
    fetch (link).then((r)=>{
      if(r.ok){
        r.json().then((data)=>setData(data.results));
      }
      
    });
    },[]);

  


  return (
    <div className={css.wrapper}>
       <div className={css.heading}>
        <span className={css.secondaryText} >Rick & Morty.</span>
        <span className={css.secondaryText} >All your Rick & morty characters in one place</span>
      </div>

      {/* search component */}
      <Search/>
      {/* search component */}

      <div className={css.body}>

        {
          data.map((data)=>{
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
    </div>
  )
}

export default Characters