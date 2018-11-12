import React, {Component} from 'react'
import './table.css'
import days, {timeIntervals} from "./const.js"
import {groups, teachers} from '../../../../data'
import getLesson, {getTeacherFullName} from './data-builder.js' 
import WeekDay from './weekday.jsx'


function checkLevels(levels){
    if (levels.length==3){
        return 'Все уровни'
    }
    return levels
}

const LessonCard = (props) => {
    if (!props.lesson) {
        return <div></div>
    }
    return <div className={`lesson-card`}>
        <div className={`title-lesson-card ${props.lesson.className}`}>
            <h3 className="typo-lesson-card-title">{props.lesson.name}</h3>
            <h5 className="typo-lesson-type">{props.lesson.type}</h5>
        </div>
        <div className="time-level">
            <p className="typo-lesson-time">{props.lesson.time}</p>
            <p className="typo-lesson-level">{checkLevels(props.lesson.levels)}</p>
        </div>
         {props.lesson.teacher.map(t => <div className="typo-lesson-teacher" key={t}>{getTeacherFullName(t)}</div>)}
    </div>
}


const TimeRow = (props) =>  <tr>
    <td className="typo-lesson-time time-cell">{props.time}</td>
    {days.map(day=> <td key={day.short}>
        <LessonCard lesson={getLesson(day, props.time, 'bighall', props.filter)}/>
        <LessonCard lesson={getLesson(day, props.time, 'loft', props.filter)}/>
    </td>)}
</tr>

class Schedule extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const filters = this.props.filters; //{title: ['Бачата']}
        return <div>
            <table className="schedule">
                <thead>
                    <tr>
                        <td></td>
                        {days.map(el=> <WeekDay key={el.full} full={el.full} short={el.short}/>)}
                    </tr>
                </thead>
                <tbody>
                    {timeIntervals.map(t => <TimeRow key={t} time = {t} filter={filters} />)}
                </tbody>
            </table>
        </div>
    }
}

export default Schedule