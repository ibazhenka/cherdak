import React from 'react'
import './panel.css'
import {groups} from '../../../../data'


function getDanceTitle(){
    let danceTitle= new Set()
    for (const group of groups) {
        danceTitle.add(group.title)
    }
    return Array.from(danceTitle).sort()
}

function getTypeOfLesson(){
    let typeOfLesson= new Set()
    for (const group of groups) {
        typeOfLesson.add(group.type)
    }
    return Array.from(typeOfLesson).sort()
}

function getLevelOfLesson(){
    let levelOfLesson= new Set()
    for (const group of groups) {
        for (const level of group.levels)
        levelOfLesson.add(level)
    }
    return Array.from(levelOfLesson)
}

const Panel = (props) => <div className={`${props.page}-panel`}>
    <h4>{props.title}</h4>
    <div className={`${props.page}-panel-content`}>{props.children}</div>
</div>

export default Panel
export {getDanceTitle, getTypeOfLesson, getLevelOfLesson}