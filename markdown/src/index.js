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

    this.handleLatLong = this.handleLatLong.bind(this);
    this.successLatLong = this.successLatLong.bind(this)
    this.errorLatLong = this.errorLatLong.bind(this)
  }
/*
  componentDidMount() {
    this.handleLatLong();
  }
*/
  handleLatLong() {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(this.successLatLong, this.errorLatLong);
    }
  }

 successLatLong(pos) {
    var crd = pos.coords;
    const lat = crd.latitude.toFixed(0);
    const lon = crd.longitude.toFixed(0);
    console.log(lat, lon);
    const latLonAPI = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=07d208f726a6eed3c065b6ee7c138516&units=imperial`;

    fetch(latLonAPI)
      .then(function (response) {
        if (!response.ok) {
          throw Error(alert("Invalid Latitude & Longitude."));
        }
        return response.json()
      }).then(data => this.setState({ api: data, isLoaded: true }))
      .catch(function (error) {
        console.log(error);
      });

  }

  errorLatLong(err) {
    console.log(`ERROR(${err.code}): ${err.message}`);
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
    } catch (e) {
      //UHHHHH FILL THIS?
    }
  };

  render() {
    const { name, main } = this.state.api;
    return (
      <div className="container">
        <div className="header">
          <div>
            {this.state.isLoaded ? <h1>{name}</h1> : <h1>Enter Location<div className="loading-location"></div></h1>}
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
