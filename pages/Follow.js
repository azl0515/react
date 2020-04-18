import React, {Component} from 'react';

import Cell from "../components/cell";
import {connect} from 'react-redux'
import {clear,updateList} from "../store/actionCreators";

class Follow extends Component{

    componentDidMount() {
        this.props.dispatch(clear('CLEAR_FOLLOW'))
        this.props.dispatch(
            updateList({collectionName:'follow',type:'UPDATE_FOLLOW',params:{_page:1,_limit:9}})
        )
    }

    render() {
        let {follow}=this.props;
        return(
            <div className="pt">
                {
                    follow.map((item,index)=>(
                        <Cell
                        key={item._id}
                        index={index}
                        data={item}
                        to={{pathname:'/detail',apiname:'follow'}}
                        >
                            <button style={{float:'right'}}>++</button>
                        </Cell>
                    ))
                }

            </div>
        )
    }
}

export default connect(
    state=>({follow:state.follow})
)(Follow)