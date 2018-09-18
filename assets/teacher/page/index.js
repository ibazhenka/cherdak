
import React from 'react'
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader'
import {teachers} from '../../../data'
import TeacherPage from '../data-builders-teacherpage.js'

export const render = (elemntId, teacher) => {
    const Page = hot(module)(() =><TeacherPage teacher={teachers[teacher]} />)
    ReactDOM.render(<Page />, document.getElementById(elemntId));
}
