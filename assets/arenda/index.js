import ArendaPage from './index.jsx'
import React from 'react'
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader'

const App = hot(module)(ArendaPage)
ReactDOM.render(<App />, document.getElementById('page'));
