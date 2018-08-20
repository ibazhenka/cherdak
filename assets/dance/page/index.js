
import React from 'react'
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader'
import {directions} from '../../../data'
import DancePage from '../data-builders-dancepage.js'


export const render = (elemntId, dance) => {
    const Page = hot(module)(() =><DancePage dance={directions[dance]} />)
    ReactDOM.render(<Page />, document.getElementById(elemntId));
}
