let initState=[];//home

//reducer
const home=(state=initState,action)=>{
    let {type,payload}=action;
    switch (type) {
        case 'UPDATE_HOME':
            return payload
        case 'CLEAR_HOME':
            return []
        default:
            return state
    }
}

export default home;