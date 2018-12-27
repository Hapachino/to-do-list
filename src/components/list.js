import React from 'react';
import ListItem from './list_item';
import NavButton from './nav_button';

export default props => {
  const listElements = props.todos.map(value => {
    return <ListItem 
              delete={() => props.delete(value._id)} 
              toggle={() => props.toggle(value._id)}
              complete={value.complete}
              key={value._id} 
              title={value.title} 
            />
  });

  return (
    <div>
      <h1 className="center">To Do List</h1>

      <NavButton to="/add-item" text="Add Item" />

      <ul className="collection">
        {listElements}
      </ul>
    </div>
  );
}
