import React from 'react'
import './style.css'

const Checkbox = (props) => <div >
    <input type="checkbox" checked={props.active} />
    {props.title}
    </div>
export default Checkbox


