import React from 'react'
import ReactDOM from 'react-dom'
import {hot} from 'react-hot-loader'
import Price from './index.jsx'

const App = hot(module)(Price)
ReactDOM.render(<App />, document.getElementById('page'));