import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



const Baner = () => {
  return (
    <div className='banner'>
        <Carousel responsive={responsive}>
              <div style={{backgroundImage:'url("https://woowahan-cdn.woowahan.com/new_resources/image/banner/5a76ab3c37ea4e7d80d3a6e11b36e0f1.jpg")'}}></div>
              <div>Item 2</div>
              <div>Item 3</div>
              <div>Item 4</div>
</Carousel>;


    </div>
  )
}

export default Baner