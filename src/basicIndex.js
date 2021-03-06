import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import './styles/index.css';
import HomePage from './components/HomePage'
// Be aware that any fetch polyfill assumes a Promise polyfill is already present.
// The easiest way to ensure you have a Promise polyfill is to enable Babel's ES6 polyfill in your entry point before any other code runs
import 'babel-polyfill'


let store = createStore(todoApp)

render(
	<Provider store={store}>
		<HomePage />
	</Provider>,
	document.getElementById('root')
)
