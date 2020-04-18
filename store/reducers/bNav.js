const bNav=(bNav=false,action)=>{
    let {type,payload}=action;
    switch (type) {
        case "UPDATE_NAV":
            return payload
        default:
            return bNav
    }
}

export default bNav;