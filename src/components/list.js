import React, { Component } from 'react';
import dummyList from '../data/to_do_list';

class List extends Component {
  state = {
    list: [],
  }

  componentDidMount() {
    this.getListData();
  }

  getListData = () => {
    this.setState({
      list: dummyList,
    });
  }

  render() {
    const listElements = this.state.list.map(value => {
      return <li className="collection-item" key={value._id}>{value.title}</li>
    });

    return (
      <ul className="collection">
        {listElements}
      </ul>
    );
  }
}

export default List;
