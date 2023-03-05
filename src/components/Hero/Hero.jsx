import React from "react";
import { Carousel } from "flowbite-react";
import css from "./Hero.module.scss";

function Hero() {
  return (
    <div className={css.wrapper}>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slideInterval={5000}>
          <div
            className={`  flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white ${css.imgWrap}`}
          >
            <img className={css.img} src="./00001.jpg" />
            <img className={css.img} src="./00002.jpg" />
            <img className={css.img} src="./00003.jpg" />
          </div>
          <div
            className={`  flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white ${css.imgWrap}`}
          >
            <img className={css.img} src="./00004.jpg" />
            <img className={css.img} src="./00005.jpg" />
            <img className={css.img} src="./00006.jpg" />
          </div>
          <div
            className={`  flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white ${css.imgWrap}`}
          >
            <img className={css.img} src="./00007.jpg" />
            <img className={css.img} src="./00008.jpg" />
            <img className={css.img} src="./00009.jpg" />
          </div>
          <div
            className={`  flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white ${css.imgWrap}`}
          >
            <img className={css.img} src="./00010.jpg" />
            <img className={css.img} src="./00011.jpg" />
            <img className={css.img} src="./00012.jpg" />
          </div>
          <div
            className={`  flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white ${css.imgWrap}`}
          >
            <img className={css.img} src="./00013.jpg" />
            <img className={css.img} src="./00014.jpg" />
            <img className={css.img} src="./00015.jpg" />
          </div>
          <div
            className={`  flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white ${css.imgWrap}`}
          >
            <img className={css.img} src="./00016.jpg" />
            <img className={css.img} src="./00017.jpg" />
            <img className={css.img} src="./00001.jpg" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Hero;
