const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    if (action.type === "INCREMENT_COUNTER") {
        return {
            ...state,
            counter: state.counter + 1
        }
    } else if(action.type === "DECREMENT_COUNTER") {
        return {
            ...state,
            counter: state.counter - 1
        }
    } else if(action.type === "ADD_CLICK") {
        return {
            ...state,
            counter: state.counter + action.payload
        }
    } else if(action.type === "SUBTRACT_CLICK") {
        return {
            ...state,
            counter: state.counter - action.payload
        }
    }


    return state
        
}
export default reducer