const INTIAL_STATE = {
    isSignedIn : null
}
export default (state = INTIAL_STATE, action) => {
    if(action.type==="SIGN_IN"){
        return {...state, isSignedIn: true}
    }else if(action.type ==="SIGN_OUT"){
        return {...state, isSignedIn: false}
    }
    return state
}
