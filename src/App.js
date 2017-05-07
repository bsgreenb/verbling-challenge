import React from 'react'
import { connect } from 'react-redux'
import { ButtonToolbar, Button } from 'react-bootstrap'
import { FormattedMessage } from 'react-intl'

import { ItemSearch, ItemResults, LocaleSelector } from './components'
import { toggleAllItems, openAllItems, closeAllItems, addItem } from './actions/itemsActions.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './App.css'

let App = ({ openAll, closeAll, toggleAll, add }) => (
  <div className="app">
    <h2 className="heading">
      <FormattedMessage id="App.heading" />
    </h2>
    <div className="container">
      <LocaleSelector />
      <div className="todo-list">
        <ItemSearch />
        <ItemResults />
        <ButtonToolbar className="button-toolbar">
          <Button onClick={ openAll }><FormattedMessage id="App.openAll" /></Button>
          <Button onClick={ closeAll }><FormattedMessage id="App.closeAll" /></Button>
          <Button onClick={ toggleAll }><FormattedMessage id="App.toggleAll" /></Button>
          <Button onClick={ add } className="pull-right" bsStyle="primary"><FormattedMessage id="App.add" /></Button>
        </ButtonToolbar>
      </div>
    </div>
  </div>
)

const mapStateToProps = (state) => (
  {
    messages: (state.intl ? state.intl.messages : {})
  }
)

const mapDispatchToProps = (dispatch) => {
  return {
    toggleAll: () => {
      dispatch(toggleAllItems())
    },
    openAll: () => {
      dispatch(openAllItems())
    },
    closeAll: () => {
      dispatch(closeAllItems())
    },
    add: (messages) => {
      const title = window.prompt(messages['App.titlePromptHeading'], messages['App.titlePromptDefaultAnswer'])
      const body = window.prompt(messages['App.bodyPromptHeading'], messages['App.bodyPromptDefaultAnswer'])
      dispatch(addItem(title,body))
    }
  }
}

const mergeProps = ({ messages }, dispatchProps) => (
  {
    ...dispatchProps,
    add: () => dispatchProps.add(messages)
  }
)

App = connect(mapStateToProps, mapDispatchToProps, mergeProps)(App)

export default App
