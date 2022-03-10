import React from "react";

export default class Temperature extends React.Component {
  constructor(props) {
    super(props);
    this.state = { convert: true, degree: this.props.temperature.toFixed(0) };
    this.convertToCelsius = this.convertToCelsius.bind(this);
    this.convertToFahrenheit = this.convertToFahrenheit.bind(this);
    this.handleTempChange = this.handleTempChange.bind(this);
  }

  convertToCelsius(temp) {
    let deg = Number(temp);
    const celsius = (deg - 32) * 5/9;
    this.setState({ degree: celsius.toFixed(0) });
  }
  convertToFahrenheit(temp) {
    let deg = Number(temp);
    const farenheit = ((9 / 5) * deg) + 32;
    this.setState({ degree: farenheit.toFixed(0) });
  }

  handleTempChange() {
    if (this.state.convert) {
      this.convertToCelsius(this.props.temperature);
    } else {
      this.convertToFahrenheit(this.props.temperature);
    }
    this.setState({ convert: !this.state.convert });
  }

  render() {
    return (
      <div className="temp-container">
        <p className="actual-temp-container">
          {this.state.convert ? this.props.temperature.toFixed(0) : this.state.degree}
          <span className="degree-symbol">&#176;{this.state.convert ? "F" : "C"}</span>
        </p>
        <button className="convert-btn" onClick={this.handleTempChange}>C/F</button>
      </div>
    );
  }
}
