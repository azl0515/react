let initState=[];//banner

//reducer
const banner=(state=initState,action)=>{
    let {type,payload}=action;

    switch (type) {
        case 'UPDATE_BANNER':
            //校验payload是不是数组
            return payload;
        case 'CLEAR_BANNER':
            //校验payload是不是数组
            return [];
        default:
            return state;
    }
}

export default banner;