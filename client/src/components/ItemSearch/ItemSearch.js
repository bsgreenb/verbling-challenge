import React, { Component } from 'react'
import { FormControl } from 'react-bootstrap'

import './ItemSearch.css'

class ItemSearch extends Component {
  render() {
    return (
      <FormControl className="item-search" type="text" placeholder="Search" />
    )
  }
}

export default ItemSearch;
