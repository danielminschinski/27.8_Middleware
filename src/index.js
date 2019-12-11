import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import DevTools from './DevTools';
import { createLogger } from 'redux-logger'
import { reducer } from './reducer.js';
import { addComment } from './actions.js';

const logger = createLogger();
const store = createStore(
	reducer,
	DevTools.instrument()
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

store.dispatch(addComment('pierwszy komentarz '));
store.dispatch(addComment('drugi komentarz '));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


