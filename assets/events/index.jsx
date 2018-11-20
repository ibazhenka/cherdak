import React from 'react'
import {events} from '../../data'
import moment, { isMoment } from 'moment'
import 'moment/locale/ru'
import { H2 } from '../typography/titles/index.jsx';
import RegistrationWindow from '../dance/registration.js'
import EventsSlider from '../slider-event/slider-event.js'

moment.locale('ru')
// const upcomingEvents = events.filter(event=>moment(event.date_start)>moment(new Date()))

// const emptyCard = () => <div className="event-empty-card"></div>
// console.log(upcomingEvents)

// function isQuantityCards(events){
//     if ((events.length%4>=2) && (document.body.clientWidth > 1000)){
//         events.push(emptyCard)
//     }
//     if ((events.length%3==2) && (document.body.clientWidth > 600)){
//         events.push(emptyCard)
//     }    
//     return events
// }
// isQuantityCards(upcomingEvents)
// console.log(upcomingEvents)

const EventSlide=(props)=> <div clasname="event-slide">
    <img src={`/static/img/${props.slideImg}`} className="event-slide-img"/>
</div>

function getTypeEvent(type, vk){
    if (type==='open lesson'){
        return <div className="event-card-button">
            <RegistrationWindow />
        </div>
    }
    if(type==='theme event'){
        return<div className="event-in-vk">
            <div className="event-vk-icon"></div>
            <a href={vk} className="typo-event-time-text"> {vk.replace('https://vk.com/', '')}</a>
        </div>
    }
    return <div className="time-none"></div>    
}

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
        return <div className="time">
            <div className="event-clock-icon"></div>
            <span className="typo-event-time-text"> {date_start.format('LT') + '-' + date_end.format('LT')}</span>
        </div>
    }
    return <div className="time-none"></div>
}


const EventCard=(props)=> <div className="event-card">
    <img src={`/static/img/${props.img}`} alt={props.img} className="event-img"/>
    <h3 className="typo-event-title event-title-margin">{props.title}</h3>
    <p className="typo-event-subtitle">{props.subtitle}</p>
    <p className="typo-event-text">{props.description}</p>
    <div className="event-date-time-place">
        <div className="when">
            <div className="event-calendar-icon"></div>
            <span className="typo-event-time-text"> {getDate(moment(props.date_start),moment(props.date_end))}</span>
        </div>
        {getTime(moment(props.date_start),moment(props.date_end))}
        <div className="place">
            <div className="event-adress-icon"></div>
            <span className="typo-event-time-text"> {props.place}</span>
        </div>
    </div>    
    {getTypeEvent(props.type, props.vk)}
</div>
console.log(events[0])

class EventsPage extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        const props = this.props
        return <div>
            <EventsSlider>
                {events.filter(event=>event.slideImg!='').map(event=><EventSlide slideImg={event.slideImg} />)}
            </EventsSlider>
            <div className="event-buttons">
                <div>
                    <button className='event-button typo-button'><a href='#upcomingEvents'>Ближайшие события</a></button>
                </div>
                <div>
                    <button className='event-button typo-button'><a href='#pastEvents'>Архив мероприятий</a></button>
                </div>
            </div>
            <div id="upcomingEvents" className="big-margin">
                <H2 color="grey" OpenSansRegular >Ближайшие события</H2>
            </div>
            <div className="event-container">
                {events.filter(event=>moment(event.date_start)>moment(new Date())).sort((a,b)=> a.date_start>b.date_start? 1: a.date_start<b.date_start? -1:0).map(event=><EventCard {...event}/>)}
            </div>
            <div id="pastEvents" className="big-margin">
                <H2 color="grey" OpenSansRegular>Архив мероприятий</H2>
            </div>
            <div className="event-container big-margin">
                {events.filter(event=>moment(event.date_end)<moment(new Date())).sort((a,b)=> a.date_start<b.date_start? 1: a.date_start>b.date_start? -1:0).map(event=><EventCard {...event}/>)}
            </div>
        </div>
    }
}

export default ()=><EventsPage />