import React from 'react';

import {BrowserRouter as Router}from 'react-router-dom';

import axios from 'axios';
import qs from 'qs';
// import pubsub from 'pubsub-js'
import store from "./redux";
import {viewGlobal} from "../store/actionCreators";

//添加一个请求的拦截
axios.interceptors.request.use((config)=>{
    //1.抓redux,携带在请求头里
    let token=store.getState().user.token;
    token =token || '';
    config.headers={token};
    //显示loading...
    //pubsub.publish('UPDATE_LOADING',true)
    store.dispatch(viewGlobal('UPDATE_LOADING',true));
    return config;//返回请求
},function (error) {
        //请求错误时做点事情
        return Promise.reject(error)
    }
);

//添加一个响应拦截
axios.interceptors.response.use(function (response) {
    store.dispatch(viewGlobal('UPDATE_LOADING',false));
    // pubsub.publish('UPDATE_LOADING',false)
    let router=new Router();//Router是BrowserRouter的别名，也是一个类，实例化
    //token过期：返回值2，当前路由不是login时跳转
    if(response.data.err==2 && !router.history.location.pathname.includes('/login')){
       // window.location.href=window.location.origin+'/login?path='+router.history.location.pathname

        // router.history.push({//hash模式可以，history模式有问题
        //     pathname:'/login',
        //     search:"path="+router.history.location.pathname
        // })

        // react路由的browserRouter使用的是h5 history API 的高阶路由组件，
        // 保证你的 UI 界面和 URL 保持同步。但是有个缺点，一刷新页面就会出现404找不到，
        // 原因是本地开发webpack是从内存中读取资源browserRouter从实际引入中并未找到文件。
        store.dispatch({type:'user',payload:{err:1}})
    }

    return response
},function (error) {
        return Promise.reject(error)
    }
)

React.axios=axios;//绑到对象包上 React.axios
React.Component.prototype.axios=axios;//axios绑定到Component类的原型 组件|this.axios
window.axios=axios;//× 希望全局使用window.axios,使用webpack来配置
export default axios;