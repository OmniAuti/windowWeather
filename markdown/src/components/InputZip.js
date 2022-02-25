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

    console.log(this.state.zip)
    this.props.handleSubmitZip(this.state.zip)
    this.setState({zip: ''})
  }

  render() {

    console.log('derpyyyy')

    return(
      <form onSubmit={this.handleSubmit}>
      <input value={this.state.zip} onChange={this.handleChange} type="text"/>
      <input type="submit"/>
      </form> 
    )
  }
}

export default InputZip