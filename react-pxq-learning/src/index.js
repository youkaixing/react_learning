import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import route from './Router/Route'
//默认点击 与单位配置
import './Config/Config.js'

import {createStore,combineReducers} from 'redux'
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import * as reducer from './Redux/reducers/Index'

import './Style/common/common.scss'
import './Style/head.scss'
import './Style/index.scss'

let store = createStore(combineReducers(reducer));

ReactDOM.render(<Provider store={store}>{route}</Provider>,
        document.getElementById('root'));
registerServiceWorker();
