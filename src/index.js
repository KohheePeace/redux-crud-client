import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Root from './components/Root';
import rootReducer from './reducers';

// https://github.com/jhen0409/react-native-debugger/issues/280
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))

ReactDOM.render(<Root store={store} />, document.getElementById('root'))