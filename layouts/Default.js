import React from "react";
import {connect} from 'react-redux';
import Login from "../pages/Login";
import App from "./App";
import Reg from "../pages/Reg";


//1 未登录，或者token过期
//3 需要注册
//2 代表的是服务器端返回的token失败码
function Auth({user:{err},...rest}) {
    if(err===1){return <Login/>}
    if(err===3){return <Reg/>}
    return <App {...rest}/>
}

export default connect(
    state=>({user:state.user})
)(Auth)