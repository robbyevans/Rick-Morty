import React from 'react'
import{Carousel} from 'flowbite-react'
import css from './Hero.module.scss'

function Hero() {
  return (
    <div className={css.wrapper}>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
  <Carousel>
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
      <img  src='./00017.jpg'/>

    </div>
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
    <img src='./00015.jpg'/>
    </div>
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
    <img src='./00004.jpg'/>
    </div>
  </Carousel>
</div>
    </div>
  )
}

export default Hero