import React, { Component } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from '../config/api';

class ViewItem extends Component {
  async componentDidMount() {
    console.log('item id:', this.props.match.params.item_id);
    const res = await axios.get(`${BASE_URL}/${this.props.match.params.item_id + API_KEY}`);

    console.log('Get item res', res)
  }

  render() {
    return (
      <div>
        <h1 className="center">View Item</h1>
      </div>
    );
  }
}

export default ViewItem;
