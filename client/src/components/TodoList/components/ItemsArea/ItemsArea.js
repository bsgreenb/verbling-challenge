import React, { Component } from 'react';

import Item from '../Item/Item.js'

import './ItemsArea.css';

class ItemsArea extends Component {
  render() {
    return (
        <div className="items-area">
          <Item
            open={false}
            text="Lipsum ipsum dolor sit amet, consectetur "/>
          <Item
            open={true}
            text="Lipsum ipsum dolor sit amet, consectetur "/>
        </div>
    )
  }
}

export default ItemsArea;
