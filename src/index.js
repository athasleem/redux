import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from "react-redux";
import {createStore} from "redux";
import allReducers from './reducers/combine-reducers'
import APP from './app';

const reduxStore=createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
ReactDOM.render(
    <Provider store={reduxStore}>
    <APP></APP>
    </Provider>,
    document.getElementById('root')
)