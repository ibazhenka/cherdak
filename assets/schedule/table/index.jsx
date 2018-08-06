import React from 'react'
import H1 from './header/index.jsx'
import Checkbox from './checkbox/index.jsx'
import Panel, {getDanceTitle, getTypeOfLesson, getLevelOfLesson} from './panel/index.jsx'
import Schedule from './table/index.jsx'
import {groups} from '../../../data'

const danceTitle = getDanceTitle()
const typeOfLessons = getTypeOfLesson()
const levelOfLesson = getLevelOfLesson()
class ScheduleTable extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: [],
            type: [],
            levels: [],
        
        }
    }
    changeTitleFilter(value, field, e) {
        console.log(value)
        if (e.target.checked) {
            const newValues = this.state[field]
            newValues.push(value)
            this.setState({[field]: newValues})
        }
        else {
            const newValues = this.state[field].filter(el => el!=value)
            this.setState({[field]: newValues})
        }
    }

    render() {
        const filters ={
            title: this.state.title,
            type: this.state.type,
            levels: this.state.levels,
        }
        console.log(filters)
        return <div>
            <H1 align="center">Расписание</H1>
            <Panel title="направление">
            {
                danceTitle.map(dance=><Checkbox title={dance} changeFilter={(e)=>this.changeTitleFilter(dance, 'title', e)}/>)
            }
            </Panel>

            <Panel title="вид занятия">
            {
                typeOfLessons.map(type=><Checkbox title={type} changeFilter={(e)=>this.changeTitleFilter(type, 'type', e)}/>)
            }
            </Panel>
            <Panel title="урОвень">
            {
                levelOfLesson.map( lvl=><Checkbox title={lvl} changeFilter={(e)=>this.changeTitleFilter(lvl, 'levels', e)}/>)
            }
            </Panel>

            <Schedule filters={filters} />
        </div>
    }
}

export default ()=><ScheduleTable/>