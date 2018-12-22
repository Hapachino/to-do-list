import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize'
import React, { Component } from 'react';
import axios from 'axios';
import List from './list';
import AddItem from './add_item';
import dummyList from '../data/to_do_list';
import { randomString } from '../helpers';

const BASE_URL = 'http://api.reactprototypes.com/todos';
const API_KEY = '?key=c1018_chosen';

class App extends Component {
  state = {
    list: [],
  }

  componentDidMount() {
    this.getListData();
  }

  addItem = async (item) => {
    await axios.post(BASE_URL + API_KEY, item);

    this.getListData();
  }

  deleteItem = async (id) => {
    await axios.delete(`${BASE_URL}/${id + API_KEY}`);

    this.getListData();
  }

  getListData = async () => {
    try {
      const res = await axios.get(BASE_URL + API_KEY);

      this.setState({
        list: res.data.todos,
      });
    } catch(err) {
      console.error(err);
    }
  }

  toggleComplete = async id => {
    await axios.put(`${BASE_URL}/${id + API_KEY}`);

    this.getListData();
  }

  render() {
    const { state: { list }, addItem, deleteItem, toggleComplete } = this;

    return (
      <div className="container">
        <h1 className="center">To Do List</h1>
        <AddItem add={addItem}/>
        <List todos={list} delete={deleteItem} toggle={toggleComplete}/>
      </div>
    );
  }
}

export default App;

// TODOS:
// toggle true/false on click
// be able to tell which are complete and which are not
