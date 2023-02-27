import React,{useState,useEffect} from 'react'
import css from './Characters.module.scss'
import {Card} from 'flowbite-react'

function Characters() {

  const[characters,setCharacters]=useState([]);

  useEffect(()=>{
    fetch (`https://rickandmortyapi.com/api/character/${[1,2,3,4,5,6,7,8,9,10]}`).then((r)=>{
      if(r.ok){
        r.json().then((character)=>setCharacters(character));
      }
      
    });
    },[]);

  return (
    <div className={css.wrapper}>
       <div className={css.heading}>
        <span className={css.secondaryText} >Rick & Morty.</span>
        <span className={css.secondaryText} >All your Rick & morty characters in one place</span>
      </div>
      <div className={css.body}>
        {
          characters.map((data,i)=>{
            
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
          })
        }
      </div>
    </div>
  )
}

export default Characters