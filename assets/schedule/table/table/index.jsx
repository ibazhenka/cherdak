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
    return <div className={props.lesson.className}>
        <h3>{props.lesson.name}</h3>
        <h5>{props.lesson.type}</h5>
        <div className="time-level">
            <p className="time">{props.lesson.time}</p>
            <p className="level">{checkLevels(props.lesson.levels)}</p>
        </div>
         {props.lesson.teacher.map(t => <div key={t}>{getTeacherFullName(t)}</div>)}
    </div>
}


const TimeRow = (props) =>  <tr>
    <td><b>{props.time}</b></td>
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
        return <div className="center">
            <table>
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