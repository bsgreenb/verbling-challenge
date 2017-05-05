import React from 'react'

import { Row, Col } from 'react-bootstrap'

import './Item.css'
import openUmbrella from './open-umbrella.svg'
import closedUmbrella from './closed-umbrella.svg'

const Item = ({ title, body, open }) => (
  <div className="item">
    <Row>
      <Col xs={11}>
        {title}
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

export default Item;
