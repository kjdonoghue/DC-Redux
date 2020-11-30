import React, {useState} from "react"
import {connect} from "react-redux"
import "./styles/styles.css"

function AddCounter(props) {

    const [value, setValue] = useState()


    const handleOnChange = (e) => {
        setValue({
            [e.target.name]: parseInt(e.target.value)
        })
    }
   

    return (
      <div className="add">
       <h2>Add/Subtract Counter</h2>
       <div><input type="text" name="value" placeholder="Enter a number" onChange={handleOnChange}/></div>
       <div>
       <button onClick={() => props.onAddClick(value.value)}>Add</button>
       <button onClick={() => props.onSubtractClick(value.value)}>Subtract</button>
       </div>
      </div>
    );
  }

    const mapDispatchToProps = (dispatch) => {
        return {
        onAddClick: (number) => dispatch({type: "ADD_CLICK", payload: number}),
        onSubtractClick: (number) => dispatch({type: "SUBTRACT_CLICK", payload: number})
        }      
    }
  
  export default connect(null, mapDispatchToProps)(AddCounter);