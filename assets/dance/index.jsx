import React from 'react'
import {directions} from '../../data'

const DanceCard = (props) => <div className="dance-card">
    <a href={`/dance/${props.id}`}>
        <img src={`/static/img/${props.img}`} alt={`${props.id}`} className="dance-img"/>
        <h2 className="dance-card_title _typography-title-dance">{props.title}</h2>
    </a>
</div>

class DancesPage extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        const props = this.props
        return  <div className="dance-container">
        {
            Object.values(directions).map(dance=><DanceCard id={dance.id} title={dance.title} img={dance.dancesPageImg}/>)
        }
        </div>
    }
}

export default DancesPage