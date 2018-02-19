import React from 'react';
import ReactDOM from 'react-dom';
import GroceryItem from './components/GroceryItem.jsx';
import GroceryList from './components/GroceryList.jsx';
import AddGrocery from './components/AddGrocery.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {id: 1, quantity: 5, description: "frozen pizza"},
        {id: 2, quantity: 10, description: "greek yogurt"},
        {id: 3, quantity: 2, description: "wine"},
        {id: 4, quantity: 1, description: "iced coffee"}
      ]
    }
  }
  componentWillMount() {
    this.fetchData();
  }
  fetchData() {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3000',
      contentType: 'text/plain',
      success: function() {
        console.log('success!')
      },
      error: function() {
        console.log('failure')
      }
    })
  }
  postData(input) {
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/groceries',
      contentType: 'text/plain',
      data: JSON.stringify(input),
      success: function(data) {
        var data = JSON.parse(data);
        console.log('success! here is the data: ', data.item, data.quantity)
      },
      error: function() {
        console.log('failure')
      }
    })
  }
  render () {
    return (
    <div>
      <AddGrocery postData={this.postData}/>
      <GroceryList list={this.state.list}/>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));