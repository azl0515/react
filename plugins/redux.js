import {createStore,combineReducers,applyMiddleware,compose} from 'redux';//compose增强器
import thunk from 'redux-thunk';

import banner from "../store/reducers/banner";
import column from "../store/reducers/column";
import detail from "../store/reducers/detail";
import follow from "../store/reducers/follow";
import home from "../store/reducers/home";
import user from "../store/reducers/user";
import bLoading from "../store/reducers/bLoading";
import bNav from "../store/reducers/bNav";
import bFoot from "../store/reducers/bFoot";

let rootRouter=combineReducers({banner,column,detail,follow,home,user,bNav,bFoot,bLoading});

//创建实例store并导出
const composeEhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;//使用redux-devtools
let store=createStore(rootRouter,composeEhancers(applyMiddleware(thunk)));//安装了中间件，改装了redux

export default store;