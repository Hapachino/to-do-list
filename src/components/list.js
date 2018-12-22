import React from 'react';
import ListItem from './list_item';

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
    <ul className="collection">
      {listElements}
    </ul>
  );
}
