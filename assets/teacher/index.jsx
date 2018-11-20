import React from 'react'
import {groups, teachers} from '../../data'
import getLesson, {getTeacherFullName, getTeacherDirections} from '../schedule/table/table/data-builder.js' 
import {H1, H2} from '../typography/titles/index.jsx'

const TeacherCard=(props)=><div className="member-card">
    <a href={`/${props.parentsPage}/${props.id}`} className="slide">
        <img src={`/static/img/${props.img}`}  alt={props.img} className={`member-img`}/>
        <h3 className="typo-title">{getTeacherFullName(props.id)}</h3>
        <div className="typo-subtitle">{props.position}</div>
        <div className="typo-subtitle upper">{getTeacherDirections(props.direction)}</div>
    </a>
</div>
class TeachersPage extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        const props = this.props
        return <div>
            <H1 color="grey" OpenSansRegular>Команда преподавателей чердака</H1>
            <div className="teacher-container">            
                {Object.values(teachers).sort((a,b)=> a.surname>b.surname? 1: a.surname<b.surname? -1:0).map(teacher=><TeacherCard parentsPage={teacher.parentsPage} img={teacher.img} id={teacher.id} direction={teacher.directionsID} position={teacher.position}/>)}
            </div>
        </div>
    }
}

export default ()=><TeachersPage />
export {TeacherCard}