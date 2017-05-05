import React from 'react';
import { connect } from 'react-redux'

import Item from './Item/Item.js'
//import itemsReducer from './itemsReducer.js'

import './ItemResults.css';

let itemResults = ({ items }) => (
  <div className="item-results">
    {
      items.map(item =>
        <Item key={ item.id } { ...item } />
      )
    }
  </div>
);

const mapStateToProps = ({ items }) => (
  { items }
);

itemResults = connect(mapStateToProps)(itemResults);

export default itemResults;
