let initState=[];//column

//reducer
const column=(state=initState,action)=>{
    let {type,payload}=action;

    switch (type) {
        case 'UPDATE_COLUMN':
            //校验payload是不是数组
            return payload
        case 'CLEAR-COLUMN':
            return [];
        default:
            return state;
    }
}

export default column;