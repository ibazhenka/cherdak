import React from 'react'
import {events} from '../../data'
import moment, { isMoment } from 'moment'
import 'moment/locale/ru'
// import {getTimeStart} from './data-builders-eventpage.js'
moment.locale('ru')

function getDate(date_start, date_end){    
    if (date_end.diff(date_start,"hour")<24){
        return date_start.format('LL')
    }
    if (date_start.get('month')===date_end.get('month')){
        return date_start.get('date') + '-' + date_end.format('LL')
    }
    return (date_start.format('LL') + '-' + date_end.format('LL'))
}

function getTime(date_start, date_end){    
    if (date_end.diff(date_start,"hour")<24){
        return <div className="time">{date_start.format('LT') + '-' + date_end.format('LT')}</div>
    }
    return <div className="time-none"></div>
}
console.log(getTime(moment('2018-09-15 20:00'), moment('2018-09-18 01:00')))

const EventCard=(props)=> <div className="event-card">
    <img src={`/static/img/${props.img}`} alt={props.img} className="event-img"/>
    <h3 className="typo-title">{props.title}</h3>
    <p className="typo-subtitle">{props.type}</p>
    <p>{props.description}</p>
    <div className="date-and-time">
        <div className="when">{getDate(moment(props.date_start),moment(props.date_end))}</div>
        {getTime(moment(props.date_start),moment(props.date_end))}
    </div>
    <div className="place">{props.place}</div>
    <button className='button typo-button'><a href='/'></a>button</button>
</div>

class EventsPage extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        const props = this.props
        return <div>
            <div className="event-container">
                {events.filter(event=>moment(event.date_start)>moment(new Date())).sort((a,b)=> a.date_start>b.date_start? 1: a.date_start<b.date_start? -1:0).map(event=> <EventCard {...event} />)}
            </div>
            <div className="event-container">
                {events.filter(event=>moment(event.date_end)<moment(new Date())).sort((a,b)=> a.date_start<b.date_start? 1: a.date_start>b.date_start? -1:0).map(event=> <EventCard {...event} />)}
            </div>
        </div>
    }
}

export default ()=><EventsPage />