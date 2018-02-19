import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      quantity: ''
    }
    this.handleChangeItem = this.handleChangeItem.bind(this);
    this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeItem(e) {
    this.setState({item: e.target.value});
  }
  handleChangeQuantity(event) {
    this.setState({quantity: event.target.value});
  }
  handleSubmit(e) {
    console.log(this.state.item, 'item', this.state.quantity, 'quantity');
    e.preventDefault();
    this.props.postData({
      item: this.state.item,
      quantity: this.state.quantity
    });
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Description
          <input type="text" value={this.state.item} onChange={this.handleChangeItem} />
        </label>
        <label>
          Quantity
          <input type="text" value={this.state.quantity} onChange={this.handleChangeQuantity} />
        </label>
        <input type="submit" value="Submit" />
      </form>

    )
  }
}

export default AddGrocery;

