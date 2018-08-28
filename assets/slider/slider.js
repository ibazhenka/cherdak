import React from 'react'
import Slider from 'react-slick'
import './slider.css'

class SimpleSlider extends React.Component {
    render() {
      let settings = {
        dots: true,
       
      };
      return <div>
      <Slider {...settings}>
        {this.props.children}
      </Slider>
    </div>
      
    }
  }
export default SimpleSlider