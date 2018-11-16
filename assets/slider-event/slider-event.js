import React from 'react'
import Slider from 'react-slick'
import './slider-event.css'


class EventsSlider extends React.Component {
    render() {
      let settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
       
      };
      return <div className="event-slider">
      <Slider {...settings}>
        {this.props.children}
      </Slider>
    </div>
      
    }
  }
export default EventsSlider