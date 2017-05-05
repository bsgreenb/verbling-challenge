import React, { Component } from 'react';

import Item from '../Item/Item.js'

import './ItemsArea.css';

class ItemsArea extends Component {
  render() {
    return (
        <div className="items-area">
          <Item
            open={false}
            title="Lipsum ipsum dolor sit amet, consectetur"
            body="elit, sed do eiusmod tempor incidundt ut labore" />
          <Item
            open={true}
            title="Lipsum ipsum dolor sit amet, consectetur"
            body="elit, sed do eiusmod tempor incidundt ut labore elit, sed do eiusmod tempor incidundt ut labore" />
          <Item
            open={true}
            title="Lipsum ipsum dolor sit amet, consectetur"
            body="elit, sed do eiusmod tempor incidundt ut labore elit, sed do eiusmod tempor incidundt ut labore elit, sed do eiusmod tempor incidundt ut labore elit, sed do eiusmod tempor incidundt ut labore" />
            <Item
              open={true}
              title="Lipsum ipsum dolor sit amet, consectetur"
              body="elit, sed do eiusmod tempor incidundt ut labore elit, sed do eiusmod tempor incidundt ut labore elit, sed do eiusmod tempor incidundt ut labore elit, sed do eiusmod tempor incidundt ut labore" />
        </div>
    )
  }
}

export default ItemsArea;
