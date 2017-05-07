import React from 'react'
import { FormControl } from 'react-bootstrap'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'

import { searchItems } from '../../actions/itemsActions.js'

import './ItemSearch.css'

// Note, redux-form would be a logical option if more fields became involved.
let ItemSearch = ({ search, searchStr, intl }) => (
  <FormControl
    className="item-search"
    type="text"
    placeholder={ intl.messages['ItemSearch.search'] }
    onChange={(e) => search(e.target.value)}
    value={ searchStr }
  />
)

const mapStateToProps = ({ intl }) => (
  { intl }
)

const mapDispatchToProps = (dispatch) => (
  {
    search: (searchStr) => {
      dispatch(searchItems(searchStr))
    }
  }
)

ItemSearch = connect(mapStateToProps, mapDispatchToProps)(ItemSearch)

export default ItemSearch
