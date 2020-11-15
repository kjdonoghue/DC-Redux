import React from "react"
import {connect} from "react-redux"
import * as actionTypes from "../store/actions/actionTypes"

function FancyCounter(props) {
    return(
        <div>
            <h1>Fancy Counter</h1>
            <button onClick={() => props.onIncrement()}>INCREMENT</button>

        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({type: actionTypes.INCREMENT})
    }

}

export default connect(null, mapDispatchToProps)(FancyCounter)