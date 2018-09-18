import React from 'react'
import {directions, teachers} from '../../data'
import {getTeacherFullName, getTeacherDirections} from '../schedule/table/table/data-builder.js' 


const TeacherPage = ({teacher}) => {
    return <div className="teacherpage-container">
        
        <div className="biography-container">
            <img src={`/static/img/${teacher.img}`} className="teacherpage-img" />
            <div className="biography">
                <div className="name-button">
                    <div>
                        <h1 className="title-teacher-page_text_dark">{getTeacherFullName(teacher.id)}</h1>
                    </div>
                    <button className="button-individual-lesson">Записаться на индивидуальный урок</button>
                </div>

                

                <p>{teacher.biography}</p>
            </div>
        </div>
        <div className="directions">
                <img src={`/static/img/${teacher.img}`} />
        </div>
    </div>
}
export default TeacherPage
