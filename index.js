import React from 'react';
import ReactDom from 'react-dom';

//引入全局样式，字体控制js
import './utils/font';
import './assets/css/index.css';

import Default from "./layouts/Default";

import {BrowserRouter as Router,Route} from 'react-router-dom'
import './plugins/axios'

//在react应用内部创建全局属性
import {serverBaseUrl,serverBaseUrl2} from "./server";
React.baseUrl=serverBaseUrl;
React.baseUrl2=serverBaseUrl2;
React.Component.prototype.baseUrl=serverBaseUrl;
React.Component.prototype.baseUrl2=serverBaseUrl2;

//引入redux配置
import store from "./plugins/redux";
import {Provider} from 'react-redux'

//强刷同步user,达到状态持久化
import qs from 'qs';
import App from './layouts/App'
let local=window.localStorage.getItem('user');
if(local){
    store.dispatch({type:'UPDATE_USER',payload:qs.parse(local)})
}

ReactDom.render(
    <Provider store={store}>
        <Router>
            <Route component={Default}/>
        </Router>
    </Provider>,
    document.getElementById('root'),
    ()=>console.log('react-dom render')
)