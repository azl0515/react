import React,{Component} from 'react';

import Header from "./Header";
import Footer from "./Footer";
import {Loading} from "../components/loading/loading";

import {Switch,Route,Redirect} from 'react-router-dom'

import Home from "../pages/Home";
import Follow from "../pages/Follow";
import Column from "../pages/Column";
import User from "../pages/User";
import Login from "../pages/Login";
import Reg from "../pages/Reg";
import Detail from "../pages/Detail";
import NoPage from "../pages/NoPage";

import {connect} from 'react-redux';
import {viewGlobal} from "../store/actionCreators";

class App extends Component{

    state={};


    static getDerivedStateFromProps(nextProps,nextState){

        // console.log('getDerivedStateFromProps','路由观测');

        let path = nextProps.location.pathname;

        if (/home|follow|column/.test(path)){
            nextProps.dispatch(viewGlobal('UPDATE_NAV',true))
            nextProps.dispatch(viewGlobal(('UPDATE_FOOT'),true))
        }

        if (/login|reg|detail/.test(path)){
            nextProps.dispatch(viewGlobal('UPDATE_NAV',false))
            nextProps.dispatch(viewGlobal(('UPDATE_FOOT'),false))
        }

        if (/user/.test(path)){
            nextProps.dispatch(viewGlobal('UPDATE_NAV',false))
            nextProps.dispatch(viewGlobal(('UPDATE_FOOT'),true))
        }

        return null;


    }

    render(){
        let {bNav,bFoot,bLoading} = this.props;
        return (
            <div className="default">
                {bLoading && <Loading/> }
                {bNav && <Header/>}
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/follow" component={Follow}/>
                    <Route path="/column" component={Column}/>
                    <Route path="/user" component={User}/>
                    <Route path="/Login" component={Login}/>
                    <Route path="/reg" component={Reg}/>
                    <Route path="/detail/:_id" component={Detail}/>
                    <Redirect exact from="/" to="/home" />
                    <Route component={NoPage}/>
                </Switch>
                {bFoot ? <Footer/> : null}
            </div>
        )
    }
}

export default connect(
    state=>({bNav:state.bNav,bFoot:state.bFoot,bLoading:state.bLoading})
)(App)