import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize'
import React, { Component } from 'react';
import List from './list';
import AddItem from './add_item';
import dummyList from '../data/to_do_list';
import { randomString } from '../helpers';

class App extends Component {
  state = {
    list: [],
  }

  componentDidMount() {
    this.getListData();
  }

  addItem = (item) => {
    const { list } = this.state;

    this.setState({
      list: [...list, {...item, _id: randomString()}],
    });
  }

  getListData = () => {
    this.setState({
      list: dummyList,
    });
  }

  render() {
    const { state: { list }, addItem } = this;

    return (
      <div className="container">
        <h1 className="center">To Do List</h1>
        <AddItem add={addItem}/>
        <List todos={list}/>
      </div>
    );
  }
}

export default App;
