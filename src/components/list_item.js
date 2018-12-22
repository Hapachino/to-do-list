import React from 'react';

export default (props) => {
  return (
    <li className="collection-item row valign-wrapper">
      <div className="col s10" style={props.complete ? {textDecoration: 'line-through', textDecorationColor: 'red'} : {}}>
        {props.title}
      </div>
      <div className="col s2 center">
        <button onClick={props.delete} className="btn btn-floating red darken-2">
          <i className="material-icons">delete</i>
        </button>
        {' '}
        <button onClick={props.toggle} className="btn btn-floating green darken-2">
          <i className="material-icons">{props.complete ? 'clear' : 'check'}</i>
        </button>
      </div>
    </li>
  );
}
