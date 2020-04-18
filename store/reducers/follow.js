let initState=[];//follow

//reducer
const follow=(state=initState,action)=>{
    let {type,payload}=action;
    switch (type) {
        case 'UPDATE_FOLLOW':
            return payload
        case 'CLEAR_FOLLOW':
            return []
        default:
            return state
    }
}

export default follow;