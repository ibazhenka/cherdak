import React from 'react'
import './style.css'

const Checkbox = (props) => <div >
    <label>
        <input type="checkbox" onChange={props.changeFilter} />
        <span className="title-checkbox">{props.title}</span>
    </label>
    </div>
export default Checkbox


