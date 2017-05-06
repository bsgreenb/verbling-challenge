import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

import { toggleItem } from '../../../actions/itemActions.js'

import './Item.css'
import openUmbrella from './open-umbrella.svg'
import closedUmbrella from './closed-umbrella.svg'

const TRUNCATION_LENGTH = 40

let Item = ({ title, body, open, onClick }) => (
  <div onClick={ onClick } className={ "item " + ( open ? "open" : "closed" ) }>
    <Row>
      <Col xs={11}>
        { open ? title : title.substr(0, TRUNCATION_LENGTH) }
        { !open && '...'}
      </Col>
      <Col xs={1}>
        <img
        className="umbrella-icon"
        src={ open ? openUmbrella : closedUmbrella }
        alt={ open ? 'item is open' : 'item is closed' }
        />
      </Col>
    </Row>
    { open && <Row><Col xs={12} className="small">{ body }</Col></Row> }
  </div>
)
//TODO: proptype here and elsewhere

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    onClick: () => {
      dispatch(toggleItem(ownProps.id))
    }
  }
)

Item = connect(null, mapDispatchToProps)(Item)

export default Item
