import BurgerMenu from './index.jsx';
import React from 'react'
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader'


const App = hot(module)(BurgerMenu)
ReactDOM.render(<App />, document.getElementById('burger-menu'));
