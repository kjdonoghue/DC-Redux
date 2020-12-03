import './App.css';
import {connect} from "react-redux"
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as ActionCreators from "./store/actions/actionCreators"

function App(props) {

  const [location, setLocation] = useState({lat: 0, lon: 0})
 

  const findLocation = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        })
    })
  }
 

  return (
    <div className="App">
        <h1>Hiker Tracker</h1>   
        <button onClick={findLocation}>Find Location</button>
        <h2>Your Current Location</h2>
          <p>Latitude: {location.lat}</p>
          <p>Longitude: {location.lon}</p>
       
        <button onClick={() => props.onSaveLocation(location)}>Save Location</button>

        <NavLink to = "/locations">See All Locations</NavLink>
    
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSaveLocation: (location) => dispatch(ActionCreators.addLocation(location))
  }
}

export default connect(null, mapDispatchToProps)(App)
