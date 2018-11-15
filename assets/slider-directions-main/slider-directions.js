import React from 'react'
import Slider from 'react-slick'
import './slider-directions.css'



/*class BlockScroll {
    constructor(){
        // this.blockScroll=(e)=> e.preventDefault()
        this.body = document.body
        this.slider=document.getElementsByClassName("slick-slider")
    }
    block(){
        this.slider.on("mouseenter", (event)=>this.body.className += " noscroll")
    }
    unblock(){
        this.slider.on("mouseleave", (event)=>this.body.className.replace(" noscroll", ""))
    }
}
const scrollBlocker = new BlockScroll()*/

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
      return <div /*onMouseEnter={(event)=>b.className += " noscroll"} onMouseLeave={(event)=>b.className.replace(" noscroll", "")}*/ className="directions-slider">
      <Slider {...settings}>
        {this.props.children}
      </Slider>
    </div>
      
    }
  }
export default DirectionsSlider