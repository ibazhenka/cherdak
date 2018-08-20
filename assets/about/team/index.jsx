import React from 'react'
import {team} from '../../../data'
import  {getTeacherFullName} from '../../schedule/table/table/data-builder.js' 

const MemberCard = (props) => <div className="teacher-block">
    <img src={`/static/img/${props.img}`} alt={`${props.id}`}/>
    <p>{getTeacherFullName(props.id)}</p>
    <p>{props.position}</p>
</div>

export default MemberCard