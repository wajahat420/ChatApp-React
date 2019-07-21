import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

import {createStore} from "redux"
import{Provider} from "react-redux"
import reducer from "./store/store"
let store = createStore(reducer)

// store.subscribe(() => console.log(store.getState()))

// store.dispatch({type : "INCREAMENT" })
           
ReactDOM.render(<Provider store={store} ><App /></Provider> , document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();