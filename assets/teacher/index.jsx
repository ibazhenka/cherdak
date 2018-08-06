import React from 'react'
import {groups, teachers} from '../../data'
import getLesson, {getTeacherFullName} from '../schedule/table/table/data-builder.js' 

const TeacherCard = (props) => <div className="teacher-block">
    <img src={`/static/img/${props.img}`} alt={`${props.id}`}/>
    <p>{getTeacherFullName(props.id)}</p>
    <p>{props.direction}</p>
</div>
class TeachersPage extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        const props = this.props
        return <div className="teacher-container">
        {
            Object.values(teachers).map(teacher=><TeacherCard img={teacher.img} id={teacher.id} direction={teacher.direction}/>)
        }
        </div>
    }
}

export default ()=><TeachersPage />