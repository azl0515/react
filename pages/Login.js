import React, {Component} from "react";
import '../assets/css/login.css';
import UcNav from "../components/uc-nav/UcNav";
import {UcButton} from "../components/uc-button";
import {UcInput} from "../components/uc-input";

import {Link} from 'react-router-dom'
import qs from 'qs'

import {connect} from 'react-redux'
import {checkUser} from "../store/actionCreators";
import store from "../plugins/redux";

class Login extends Component{
    state={
        username:'',
        password:'',
        errorMsg:''
    }

    login=()=>{
       this.props.dispatch(
           checkUser({collection:'login',username:this.state.username,password:this.state.password})
       ).then(
           res=>this.setState({errorMsg:res.data.msg})
       )
    };

    changeIpt=(ev)=>{
        this.setState({
            [ev.target.name]:ev.target.value
        })
    }

    // // show=(a,b,c,ev)=>{
    // show=()=>{
    //     console.log('show')
    // }

    render() {
        let {username,password,errorMsg}=this.state
        return(
            <div className="content">
                <UcNav arrow="gray" borderWidth={0} bgColor="transparent"></UcNav>
                <h1></h1>
                <div className="login-box">
                    <p className="lsolid"></p>
                    <div className="login">
                        <a onClick={()=>store.dispatch({type:'UPDATE_USER',payload:{err:1}})}>登录</a>
                        <span></span>
                        <a onClick={()=>store.dispatch({type:'UPDATE_USER',payload:{err:3}})}>注册</a>
                    </div>
                    <p className="rsolid"></p>
                </div>
                <ul>
                    <UcInput label="用户" model={{name:'username',value:username,onChange:this.changeIpt}}></UcInput>
                    <UcInput
                    label="密码"
                    type="password"
                    model={{name:'password',value:password,onChange:this.changeIpt}}
                    />
                    {errorMsg}
                </ul>
                <div className="footbox">
                    <UcButton style={{marginTop:'0.64rem'}} clickHandler={this.login}>登录</UcButton>
                    {/*<UcButton clickHander={this.show.bind(null,1,2,3)}>登陆路</UcButton>*/}
                    {/*<UcButton clickHander={(ev)=>this.show(1,2,3,ev)}>登陆陆</UcButton>*/}
                    <a className="tishi">忘记密码？</a>
                </div>

            </div>
        )
    }
}


export default connect()(Login)