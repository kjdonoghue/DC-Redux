import React from "react"
import {connect} from "react-redux"
import "./styles/styles.css"

function IncrementCounter(props) {
  return (
    <div className="increment">
        <h2>Increment/Decrement Counter</h2>
        <button onClick={() => props.onIncrementCounter()}>Increment</button>
        <button onClick={() => props.onDecrementCounter()}>Decrement</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch({type: "INCREMENT_COUNTER"}),
        onDecrementCounter: () => dispatch({type: "DECREMENT_COUNTER"})
    }
}

export default connect(null, mapDispatchToProps)(IncrementCounter);