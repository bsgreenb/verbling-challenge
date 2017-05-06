import React from 'react'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'

import { getVisibleItems } from '../../reducers/itemsReducer.js'
import Item from './Item/Item.js'

import './ItemResults.css'

let itemResults = ({ items, searchStr }) => (
  <div className="item-results">
    { items.length === 0 && <div className="alert alert-warning">
    { searchStr.length ? 'No results for your search' : 'Add an item to begin!' }
    </div>
  }
    {
      items.map(item =>
        <Item key={ item.id } { ...item } />
      )
    }
  </div>
)

const mapStateToProps = ({ items, searchStr }) => (
  {
    items: getVisibleItems(items, searchStr),
    searchStr
  }
)

itemResults = connect(mapStateToProps)(itemResults)

export default itemResults
