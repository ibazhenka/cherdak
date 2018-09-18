import React from 'react'
import Slider from 'react-slick'

class TeachersSlider extends React.Component {
    render() {
      let settings = {
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
       
      };
      return <div className="directions-slider">
      <Slider {...settings}>
        {this.props.children}
      </Slider>
    </div>
      
    }
  }
export default TeachersSlider