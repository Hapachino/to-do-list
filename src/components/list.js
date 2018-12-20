import React from 'react';

export default props => {
  const listElements = props.todos.map(value => 
     <li className="collection-item" key={value._id}>{value.title}</li>
  );

  return (
    <ul className="collection">
      {listElements}
    </ul>
  );
}
