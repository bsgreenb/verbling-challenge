import React from 'react'
import { FormControl } from 'react-bootstrap'
import { connect } from 'react-redux'

import { searchItems } from '../../actions/itemsActions.js'

import './ItemSearch.css'

// Note, redux-form would be a logical option if more fields became involved.
let ItemSearch = ({ search, searchStr }) => (
  <FormControl
    className="item-search"
    type="text"
    placeholder="Search"
    onChange={(e) => search(e.target.value)}
    value={ searchStr }
  />
)
//
// const mapStateToProps = ({searchStr}) => (
//   { searchStr }
// )

const mapDispatchToProps = (dispatch) => (
  {
    search: (searchStr) => {
      dispatch(searchItems(searchStr))
    }
  }
)

ItemSearch = connect(null, mapDispatchToProps)(ItemSearch)

export default ItemSearch
