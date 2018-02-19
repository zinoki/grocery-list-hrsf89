import React from 'react';

const GroceryItem = ({item}) => (
  <div>
  <div>{item.description} {item.quantity}</div>
  </div>
)

export default GroceryItem;