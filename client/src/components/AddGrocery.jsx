import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({value: e.target.value});
  }
  handleSubmit(e) {
    console.log('worked');
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Description
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>

    )
  }
}

export default AddGrocery;

