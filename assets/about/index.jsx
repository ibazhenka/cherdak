import React from 'react'
import {team} from '../../data'
import MemberCard from './team/index.jsx'
import getLesson, {getTeacherFullName} from '../schedule/table/table/data-builder.js' 

console.log(team)


class AboutPage extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        const props = this.props
        return <div className="teacher-container">
        {
            Object.values(team).map(member=><MemberCard img={member.img} id={member.id} position={member.position}/>)
        }
        </div>
    }
}

export default ()=><AboutPage />