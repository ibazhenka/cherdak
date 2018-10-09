import React from 'react'
import Slider from 'react-slick'

class HallsSlider extends React.Component {
    render() {
      let settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
       
      };
      return <div className="arenda-slider">
      <Slider {...settings}>
        {this.props.children}
      </Slider>
    </div>
      
    }
  }
export default HallsSlider