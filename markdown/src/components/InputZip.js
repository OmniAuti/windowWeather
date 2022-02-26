import React from 'react'

class InputZip extends React.Component {
  constructor(props) {
    super(props)
    this.state = {zip: ''}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({zip: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    if (isNaN(this.state.zip)) return alert('Enter a valid Zip Code.')

    console.log(this.state.zip)
    this.props.handleSubmitZip(this.state.zip)
    this.setState({zip: ''})
  }

  render() {
    return(
      <form className="form" onSubmit={this.handleSubmit}>
      <input value={this.state.zip} placeholder="Zip Code" onChange={this.handleChange} maxLength="5" type="text"/>
      <input type="submit"/>
      </form> 
    )
  }
}

export default InputZip