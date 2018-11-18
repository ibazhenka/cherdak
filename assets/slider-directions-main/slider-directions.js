import React from 'react'
import Slider from 'react-slick'
import './slider-directions.css'
import blocker from '../blocker/blocker.js'

class DirectionsSlider extends React.Component {
    
    render() {
    let settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive:[{
        breakpoint: 800,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    },{
        breakpoint: 1200,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    },]
    };
    
    const b = document.body
      return <div onTouchStart={()=>blocker.block()} onTouchEnd={()=>blocker.unblock()} className="directions-slider">
      <Slider {...settings}>
        {this.props.children}
      </Slider>
    </div>
      
    }
  }
export default DirectionsSlider