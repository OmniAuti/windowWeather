import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Window from "./components/Window";
import InputZip from "./components/InputZip";
import Temperature from "./components/Temperature";

class WindowWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = { api: [], isLoaded: false, zipCode: "" };
  }

  componentDidMount() {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(success, error);
    }

    function success(pos) {
      var crd = pos.coords;

      console.log("Your current position is:");
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
  }

  handleNewZip = async (zip) => {

try {
    const zipcodeAPI = `http://api.openweathermap.org/geo/1.0/zip?zip=${zip},US&appid=07d208f726a6eed3c065b6ee7c138516&units=imperial`;
    const getLocation = await fetch(zipcodeAPI)
      .then(function (response) {
        if (!response.ok) {
          throw Error(alert("Enter a valid Zip Code."));
        }
        return response;
      })
      .catch(function (error) {
        console.log(error);
        
      });
    const data = await getLocation.json();
    var newLocation = await data.name;
    // RECALL API TO GET ALL INFO
    var api = `https://api.openweathermap.org/data/2.5/weather?q=${newLocation}&appid=07d208f726a6eed3c065b6ee7c138516&units=imperial`;
    fetch(api)
      .then((res) => res.json())
      .then((data) => this.setState({ api: data, isLoaded: true }))
      .catch(function (error) {
        console.log(error);
      });
  }
  catch(e)
  {
    //UHHHHH
  }
    
  };

  render() {
    const { name, main } = this.state.api;
    return (
      <div className="container">
        <div className="header">
          <div>
            {this.state.isLoaded ? <h1>{name}</h1> : <h1>Enter Location</h1>}
          </div>
          <InputZip handleSubmitZip={this.handleNewZip} />
        </div>
        <Window
          weatherID={this.state.api.weather}
          isLoaded={this.state.isLoaded}
        />
        {this.state.isLoaded && <Temperature temperature={main.temp} />}
      </div>
    );
  }
}

ReactDOM.render(<WindowWeather />, document.getElementById("root"));
