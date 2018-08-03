import React from 'react'
import './panel.css'

const Panel = (props) => <div className="schedule-panel">
    <h4>{props.title}</h4>
    <div className="panel-row">{props.children}</div>
</div>

export default Panel