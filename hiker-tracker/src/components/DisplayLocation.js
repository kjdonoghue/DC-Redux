
import {connect} from "react-redux"


function DisplayLocations(props) {

    let location = props.showLocations.map(location => {

        return <li>
                {location.lat}, {location.lon}
                <button onClick={() => props.onDeleteLocation()}>Delete</button>       
                <a href={`https://www.latlong.net/c/?lat=${location.lat}&long=${location.lon}`}>See Location on Map </a>
                </li>
    }) 

  return (
    <div className="DisplayContainer">
        <h1>Your Saved Locations</h1>
       <ul>{location}</ul>
    </div>
  );
}

const mapStateToProps = (state) => {
    return{
        showLocations: state.location
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteLocation: (index) => dispatch({type: "ON_DELETE_LOCATION", payload: index})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DisplayLocations);
