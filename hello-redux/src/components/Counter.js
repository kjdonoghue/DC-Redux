import React, {useState} from "react"
import {connect} from "react-redux"
import * as actionTypes from "../store/actions/actionTypes"
 
function Counter(props) {

    const [value, setValue] = useState(0)

    const handleIncrementClick = () => {
        props.onIncrement()

    }

    const handleAddClick = () => {
        props.onAdd(value)

    }

    const handleNumberChange = (e) => {
        let value = parseInt(e.target.value)
       setValue(value)

    }

    return (
        <div>
            <h1>{props.ctr}</h1>
            <button onClick={handleIncrementClick}>Increment</button>
            <input type="text" onChange={handleNumberChange}/>
            <button onClick={handleAddClick}>Add</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({type: actionTypes.INCREMENT}),
        onAdd: (val) => dispatch({type: actionTypes.ADD, value: val})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)