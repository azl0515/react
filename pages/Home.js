import React,{Component} from 'react';

import UcSwiper from "../components/uc-swiper";
import Cell from "../components/cell";
import {UcButton} from "../components/uc-button";
import {clear, updateList} from "../store/actionCreators";
import {connect} from 'react-redux'

class Home extends Component{
    componentWillUnmount(){
        console.log('Home componentWillUnmount')
    }

    componentDidMount() {
        console.log('Home componentDidMount')
        this.props.dispatch(clear('CLEAR_HOME'));
        this.props.dispatch(clear('CLEAR_BANNER'));
        this.props.dispatch(
            updateList({collectionName:'home',type:'UPDATE_HOME',params:{_limit:10}})
        );
        this.props.dispatch(
            updateList({collectionName:'banner',type:'UPDATE_BANNER',params:{_limit:3}})
        )
    }

    render(){
        let {banner,home}=this.props;
        return (
            <div className="Home">
                <UcSwiper
                    data={banner}
                    to={{pathname:'/detail',apiname:'banner'}}
                />

                {
                    home.map((item,index)=>(
                        <Cell
                            key={item._id}
                            index={index}
                            data={item}
                            to={{pathname:'/detail',apiname:'home'}}
                        >
                            <UcButton style={{float:'right'}} size="mini">+</UcButton>
                        </Cell>
                    ))
                }


            </div>
        )
    }

}

export default connect(
    state=>({home:state.home,banner:state.banner})
)(Home)