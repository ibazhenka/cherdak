import DancesPage from './index.jsx'
import React from 'react'
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader'

const App = hot(module)(DancesPage)
ReactDOM.render(<App />, document.getElementById('page'));
