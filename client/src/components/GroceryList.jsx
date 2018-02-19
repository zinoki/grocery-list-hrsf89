import React from 'react';
import GroceryItem from './GroceryItem.jsx';

const GroceryList = ({list}) => (
  <div>
  {list.map((item) => (
    <div className="groceries">
    <GroceryItem item={item} />
    </div>)
  )}
</div>)

export default GroceryList;


