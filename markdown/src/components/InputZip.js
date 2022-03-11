import React from "react";

class InputZip extends React.Component {
  constructor(props) {
    super(props);
    this.state = { zip: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(e) {
    this.setState({ zip: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.zip.length < 5) return alert("Enter a valid US Zip Code.");
    if (this.state.zip == "" || this.state.zip == " ")
      return alert("Enter a valid US Zip Code.");
    if (isNaN(this.state.zip)) return alert("Enter a valid US Zip Code.");

    this.props.handleSubmitZip(this.state.zip);
    this.setState({ zip: "" });
  }

  handleKeyPress(e) {
    const code = e.keyCode || e.which;
    if (code === 13) {
      this.handleSubmit(e);
    }
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          value={this.state.zip}
          placeholder="US Zip Code"
          onKeyPress={this.handleKeyPress}
          onChange={this.handleChange}
          maxLength="5"
          type="text"
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default InputZip;
