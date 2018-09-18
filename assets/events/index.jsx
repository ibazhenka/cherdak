import React from 'react'
import {events} from '../../data'

const EventCard=(props)=> <div className="event-card"><a href>
    <img src={`/static/img/${props.img}`} alt={props.img} className="event-img"/>
    <h3>{props.title}</h3>
    <div className="date-and-time">
        <div className="when">{props.when}</div>
        <div className="time">{props.time}</div>
    </div>
    <div className="place">{props.place}</div>
    <div>{props.description}</div></a>
</div>


console.log(events)


class EventsPage extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        const props = this.props
        return <div>
            {events.map(event=> <EventCard img={event.img} title={event.title} when={event.when} time={event.time_start} place={event.place} />)}
        </div>
    }
}

export default ()=><EventsPage />