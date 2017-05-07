import React from 'react'
import connect from 'react-redux'
import { Row, Col } from 'react-bootstrap'

import LocaleOption from './LocaleOption/LocaleOption.js'
import locales from '../../locales/'

import './LocaleSelector.css'

const LocaleSelector = ({ locale }) => (
  <Row className="locale-selector">
    <Col xs={ 4 } xsOffset={ 2 } sm={ 3 } smOffset={ 3 } md={ 2 } mdOffset={ 4 } >
      <LocaleOption
        key={ 1 }
        locale={ locales.es }
      />
    </Col>
    <Col xs={ 4 } sm={ 3 } md={ 2 }>
      <LocaleOption
        key={ 2 }
        locale={ locales.en }
      />
    </Col>
  </Row>
)

export default LocaleSelector
