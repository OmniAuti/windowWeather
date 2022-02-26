import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import WeatherOutput from "./components/WeatherOutput";
import Window from "./components/Window";
import InputZip from "./components/InputZip";

class WindowWeather extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({api: [], isLoaded: false, zipCode: ''})
    }

    handleNewZip = async (zip) => {
        const zipcodeAPI = `http://api.openweathermap.org/geo/1.0/zip?zip=${zip},US&appid=07d208f726a6eed3c065b6ee7c138516&units=imperial`;
        const getLocation = await fetch(zipcodeAPI);
        const data = await getLocation.json()
        var newLocation = await data.name;
        // RECALL API TO GET ALL INFO
        var api = `https://api.openweathermap.org/data/2.5/weather?q=${newLocation}&appid=07d208f726a6eed3c065b6ee7c138516&units=imperial`;
        const newLocationData = await fetch(api).then(res => res.json()).then(data =>  this.setState({ api:data, isLoaded: true}, console.log(data)))
    }

    render() {
        const {name, main} = this.state.api
        return(
            <div className="container">
                <div className="header">
                    <div>
                    {this.state.isLoaded ? <h1>{name}</h1> : <h1>Enter Location</h1>}
                    </div>
                    <InputZip handleSubmitZip={this.handleNewZip}/>
                </div>
                <Window/>
                <div className="temp-container">
               {this.state.isLoaded && <p>{main.temp} <span>&#176;F</span>
                </p>} 
                </div>
            </div>
        )
    }
}




ReactDOM.render(<WindowWeather />, document.getElementById("root"));


/*
 const handleSubmit = async (e) => {
    e.preventDefault();
    var zipCode = this.state.inputVal;
   // LOOK UP ZIPCODE TO GET LOCATION NAME
    let zipcodeAPI = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},US&appid=07d208f726a6eed3c065b6ee7c138516&units=imperial`;
    const getLocation = await fetch(zipcodeAPI);
    const data = await getLocation.json()
    var newLocation = await data.name;
      
// RECALL API TO GET ALL INFO
      var api = `https://api.openweathermap.org/data/2.5/weather?q=${newLocation}&appid=07d208f726a6eed3c065b6ee7c138516&units=imperial`;
      const newLocationData = await fetch(api).then(res => res.json()).then(data =>  this.setState({ isLoaded: true, items: data }, console.log(data)))
  };
*/