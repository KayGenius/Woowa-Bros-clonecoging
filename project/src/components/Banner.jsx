import React, { useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './Banner.module.css'
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



const Banner = () => {

  return (
    <div className={styles.banner}>
      <Carousel responsive={responsive} >
        <div className={styles.banner1}>
          <video muted='muted' autoplay='autoplay' loop>
          <source src='https://woowahan-cdn.woowahan.com/new_resources/image/banner/e7cd396be2fb4c24838ea637b79c32dc.mp4' type='video/mp4' />
          </video>
           <p className={styles.banner1text}>만드는 사람이 수고로우면 <br></br>쓰는사람이 편하다</p>
        </div>

        <div className={styles.banner2}>
          <video muted='muted' autoplay='autoplay' loop>
            <source src='https://woowahan-cdn.woowahan.com/new_resources/image/banner/ad2b9b0ab00e42a9b801cc862eae372b.mp4' type='video/mp4' />
          </video>
        </div>
        <div className={styles.banner3}></div>
        <div className={styles.banner4}></div>
      </Carousel>

    </div>
  )
}

export default Banner