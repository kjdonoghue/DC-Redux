import * as actionTypes from "../store/actions/actionTypes"


const  initialState = {
    counter: 0,

}

const reducer = (state = initialState, action) => {

    if (action.type === actionTypes.INCREMENT) {
        return {
            ...state,
            counter: state.counter + 1
        }
    } else if (action.type === actionTypes.ADD) {
        return{
            ...state, 
            counter: state.counter + action.value
        }
    }

    return state
}

export default reducer