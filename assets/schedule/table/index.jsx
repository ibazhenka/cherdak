import React from 'react'
import H1 from './header/index.jsx'
import Checkbox from './checkbox/index.jsx'
import Panel from './panel/index.jsx'
import Table from './table/index.jsx'
import { direction , type , level } from "./table/const.js"
import {groups} from '../../../data'
class ScheduleTable extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return <div>
            <H1 align="center">Расписание</H1>
            <Panel title="направление">
            {
                direction.map(
                    dance=><Checkbox
                        title={dance}
                />)
            }
            </Panel>
            <Panel title="вид занятия">
            {
                type.map(
                    typeOfLessons=><Checkbox
                        title={typeOfLessons}
                />)
            }
            </Panel>
            <Panel title="урОвень сложности">
            {
                level.map(
                    lvl=><Checkbox
                        title={lvl}
                />)
            }
            </Panel>
            <Table />
        </div>
    }
}

export default ()=><ScheduleTable/>