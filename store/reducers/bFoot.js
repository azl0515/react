const bFoot=(bFoot=false,action)=>{
    let {type,payload}=action;
    switch (type) {
        case "UPDATE_FOOT":
            return payload
        default:
            return bFoot;
    }
}

export default bFoot;