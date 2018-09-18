import React from 'react'
import {groups, teachers} from '../../data'
import getLesson, {getTeacherFullName, getTeacherDirections} from '../schedule/table/table/data-builder.js' 

const TeacherCard = (props) => <div className="teacher-card">
    <a href={`/teacher/${props.id}`}>
        <div className="main-round-photo">
            <img src={`/static/img/${props.img}`} className="teacher-img main-teachers-photo" alt={`${props.id}`}/>
        </div>
        <div className="teacher-title_fon">
            <p className="teacher-name">{getTeacherFullName(props.id)}</p>
            <p className="teacher-direction">{getTeacherDirections(props.direction)}</p>
        </div>
    </a>
</div>
class TeachersPage extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        const props = this.props
        return <div>
            <h1 className="title-dance-page_text_dark"> Команда преподавателей чердака</h1>
            <div className="teacher-container">            
                {Object.values(teachers).map(teacher=><TeacherCard img={teacher.img} id={teacher.id} direction={teacher.directionsID}/>)}
            </div>
        </div>
    }
}

export default ()=><TeachersPage />
export {TeacherCard}