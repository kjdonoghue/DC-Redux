const intialState = {
    location: [{lat: 0, lon: 0}, {lat: 0, lon: 0}]
}

const reducer = (state = intialState, action) => {
    if (action.type === "ON_SAVE_LOCATION") {
        return{
        location: [...state.location, action.payload]
        }
    } else {
    return state
    }
}

export default reducer