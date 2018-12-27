import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize'
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import List from './list';
import AddItem from './add_item';
import ViewItem from './view_item';
import { BASE_URL, API_KEY } from '../config/api';

class App extends Component {
  state = {
    list: [],
  }

  componentDidMount() {
    this.getListData();
  }

  addItem = async (item) => {
    await axios.post(BASE_URL + API_KEY, item);

    await this.getListData();
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
        <Route exact path="/" render={props => {
          return <List {...props} todos={list} delete={deleteItem} toggle={toggleComplete} />;
        }} />

        <Route path="/add-item" render={props => {
          return <AddItem {...props} add={addItem} />;
        }} />

        <Route path="/item/:item_id" component={ViewItem} />
      </div>
    );
  }
}

export default App;
