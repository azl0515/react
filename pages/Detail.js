import React, {Component} from "react";
import '../assets/css/detail.css'
import UcNav from "../components/uc-nav/UcNav";

import zan from '../assets/img/zan.png';//图片引入模块化使用
import xing from '../assets/img/xing.png';
import fx from '../assets/img/fx.png';
import zan1 from '../assets/img/zan1.png'

import qs from 'query-string'
import BareScreen from "../components/BareScreen";

import {connect} from 'react-redux'
import {clear,updateDetail} from "../store/actionCreators";

class Detail extends Component{


    constructor(props) {
        super(props);

        let apiname=qs.parse(props.location.search).apiname;
        let _id=props.match.params._id;
        props.dispatch(clear('CLEAR_DETAIL'))
        props.dispatch(
            updateDetail({collectionName:apiname,_id})
        )
    }

    renderPage=({title,des,time,detail:{auth,icon,content}})=>(
        <div>
            <UcNav/>
            <div className="content">
                <div className="header clear"><h2><img width="50" src={`${this.baseUrl2}/${icon}`} alt=""/></h2><p>{auth}</p></div>
                <div className="cont">
                    <h3>{title}</h3>
                    <div className="time"><p>{time}<span><img src={zan} alt=""/></span></p>
                    </div>
                    <div className="text-box" dangerouslySetInnerHTML={{__html:content}}>
                    </div>
                </div>
            </div>
            <div className="foot-btn">
                <ul>
                    <li className="say"><a >
                        <i><img src={require('../assets/img/say.png')} /></i><span>0</span>
                    </a></li>
                    <li
                        className="zan"
                    ><a >
                        <i width="12"><img src={zan1}/></i><span>0</span>
                    </a></li>
                    <li className="xing"><a >
                        <i><img src={xing} alt=""/></i>
                    </a></li>
                    <li className="fx"><a>
                        <i><img src={fx} alt=""/></i>
                    </a></li>
                </ul>
            </div>
        </div>
    );

    renderBareScreen=()=>(<BareScreen/>)

    render() {
        let {data}=this.props
        let el=null;
        if(data.title){
            el=this.renderPage(data)
        }else{
            el=this.renderBareScreen()
        }

        return el;
    }
}

export default connect(
    state=>({data:state.detail})
)(Detail)