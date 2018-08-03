import React from 'react'
import './table.css'
import days, {timeIntervals} from "./const.js"
import {groups} from '../../../../data'

const hallsNumber = {'bighall':1, 'loft':2}
function getLessons() {
    const list = { }
    for (const group of groups) {
        // if (group.level == 'Начинающие'|| group.level == 'Практика' && group.title == 'Сальса ЛА'|| group.title == 'Хастл' ) { 
            for (const time of group.times){
                const key= time.day + ' ' + time.start + ',' + hallsNumber[time.hall]
                const forkTimes= time.start + ' - ' + time.end
                list[key] = [group.id, group.title, forkTimes, group.level, group.teachers[0]]
            }
        // }
    }
    return list
}
const getKey = (day, time, hall) => {
    return day.short.toLowerCase() + " "+ time + "," + hall
}
const TableLessons = (props) => {
    const key = getKey(props.day, props.time, 2)
    const lesson = props.lessons[key]
    if (!lesson) {
        return <td>-</td>
    }
    const [className, name, time, level, teacher1] = lesson
    return <td className={className}>
        <h3>{name}</h3>
        <div className="time-level">
            <p className="time">{time}</p>
            <p className="level">{level}</p>
        </div>
        <Teacher  firstname={teacher1.firstname} surname={teacher1.surname}/>
        {/* <Teacher  firstname={teacher2.firstname} surname={teacher2.surname}/> */}
    </td>
}

const TableRow = (props) =><tr>
    <td>{props.time}</td>
    {days.map(day=> <TableLessons day={day} time={props.time} lessons={props.lessons}/>)}
</tr>

const Teacher = (props) => <div>{props.firstname} {props.surname}</div>

const TableHeader = (props) => <td className="cell" title={props.full}>{props.short}</td>

//    'пн 17:00,1':['irish','Ирландские танцы', '17:00 - 18:00', 'Начинающие', voronina, '']
const Table = (props) => {
    const lessons = getLessons() 
    return <div className="center">
        <table>
            <thead>
                <tr>
                    <td></td>
                    {days.map(el=> <TableHeader full={el.full} short={el.short}/>)}
                </tr>
            </thead>
            <tbody>
                {timeIntervals.map(t => <TableRow lessons={lessons} time = {t} />)}
            </tbody>
        </table>
    </div>
}

export default Table