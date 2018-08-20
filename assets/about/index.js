import AboutPage from './index.jsx'
import React from 'react'
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader'

const App = hot(module)(AboutPage)
ReactDOM.render(<App />, document.getElementById('page'));
