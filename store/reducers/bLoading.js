const bLoading=(bLoading=false,action)=>{
    let {type,payload}=action;
    switch (type) {
        case "UPDATE_LOADING":
            return payload
        default:
            return bLoading
    }
}

export default bLoading;