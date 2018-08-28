import React from 'react'
import {groups, teachers} from '../../data'
import getLesson, {getTeacherFullName, getTeacherDirections} from '../schedule/table/table/data-builder.js' 

export const TeacherCard = (props) => <div className="teacher-block">
    <a href={`/teacher/${props.id}`}>
        <img src={`/static/img/${props.img}`} alt={`${props.id}`}/>
        <p>{getTeacherFullName(props.id)}</p>
        <p>{getTeacherDirections(props.direction)}</p>
    </a>
</div>
class TeachersPage extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        const props = this.props
        return <div className="teacher-container">
        {
            Object.values(teachers).map(teacher=><TeacherCard img={teacher.img} id={teacher.id} direction={teacher.directionsID}/>)
        }
        </div>
    }
}

export default ()=><TeachersPage />