import React from 'react'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'

import { getVisibleItems } from '../../reducers/itemsReducer.js'
import Item from './Item/Item.js'

import './ItemResults.css'

let ItemResults = ({ items, searchStr }) => (
  <div className="item-results">
    { items.length === 0 &&
      <div className="alert alert-warning">
        <FormattedMessage
          id={ "ItemResults." + (searchStr.length ? "noResults" : "noResultsStart") }/>
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

ItemResults = connect(mapStateToProps)(ItemResults)

export default ItemResults
