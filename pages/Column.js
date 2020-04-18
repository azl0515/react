import React, {Component} from 'react';

import Cell from "../components/cell";
import {connect} from 'react-redux'
import {clear,updateList} from "../store/actionCreators";

class Column extends Component{
    componentDidMount() {
        this.props.dispatch(clear('CLEAR_COLUMN'))

        this.props.dispatch(
            updateList({collectionName:'column',type:'UPDATE_COLUMN',params:{_page:1,_limit:6}})
        )
    }

    render() {
        let {column}=this.props;
        return(
            <div className="pt">
                {
                    column.map(item=>(
                        <Cell
                        key={item._id}
                        data={item}
                        to={{pathname:'/detail',apiname:'column'}}
                        />
                    ))
                }
            </div>
        )
    }
}

export default connect(
    state=>({column:state.column})
)(Column)