import React from 'react';

const GroceryList = ({list}) => (
  <table>
  <div className="groceries">{list.map(item => (
    <tr>
      <td>{item.description}</td><td>{item.quantity}</td>
    </tr>
  ))}</div>
  </table>
)

export default GroceryList;