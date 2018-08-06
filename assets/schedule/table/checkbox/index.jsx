import React from 'react'
import './style.css'

const Checkbox = (props) => <div >
    <label>
        <input type="checkbox" onChange={props.changeFilter} />
        {props.title} 
    </label>
    </div>
export default Checkbox


