import React from "react"
import {connect} from "react-redux"
import "./styles/styles.css"

function DisplayCounter(props) {
  return (
    <div className="display">
        <h2>DisplayCounter</h2>
        <h3>{props.ctr}</h3>
    </div>
  );
}

const mapStateToProps = (state) => {
    return{
        ctr: state.counter
    }
}

export default connect(mapStateToProps)(DisplayCounter);