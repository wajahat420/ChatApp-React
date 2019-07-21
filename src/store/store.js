function reducer(state=0,action){
    switch(action.type){
        case "INCREAMENT":
            console.log("state",state   )
            return state + 1
        case "DECREAMENT":
            return state - 1
        default :
            return state
    }
}

export default reducer

