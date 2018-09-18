
import React from 'react'
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader'
import {eventss} from '../../../data'
import EventPage from '../data-builders-eventpage'


export const render = (elemntId, event) => {
    const Page = hot(module)(() =><EventPage event={events[event]} />)
    ReactDOM.render(<Page />, document.getElementById(elemntId));
}
