import * as actionTypes from "./actionTypes"

export const addLocation = (location) =>{
    return{
        type: actionTypes.ON_SAVE_LOCATION, 
        payload: location
    }
}

