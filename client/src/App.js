import React from 'react';
import { connect } from 'react-redux'
import { ButtonToolbar, Button } from 'react-bootstrap'

import { ItemSearch, ItemResults } from './components'
import { toggleAllItems, openAllItems, closeAllItems, addItem } from './actions.js'

import './App.css';

let App = ({ openAll, closeAll, toggleAll, add }) => (
  <div className="app">
    <h2 className="heading">Verbling Challenge with Honors</h2>
    <div className="todo-list">
      <ItemSearch />
      <ItemResults />
      <ButtonToolbar className="button-toolbar">
        <Button onClick={ openAll }>Open All</Button>
        <Button onClick={ closeAll }>Close All</Button>
        <Button onClick={ toggleAll }>Toggle All</Button>
        <Button onClick={ add } className="pull-right" bsStyle="primary">Add</Button>
      </ButtonToolbar>
    </div>
  </div>
)

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    toggleAll: () => {
      dispatch(toggleAllItems());
    },
    openAll: () => {
      dispatch(openAllItems());
    },
    closeAll: () => {
      dispatch(closeAllItems());
    },
    add: () => {
      const title = window.prompt('Title', 'lorem ipsum');
      const body = window.prompt('Body', 'eratus ratus mento memori');
      dispatch(addItem(title, body));
    }
  }
);

App = connect(null, mapDispatchToProps)(App);

export default App;
