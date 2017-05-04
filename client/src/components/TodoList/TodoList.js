import React, { Component } from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap'

import { ItemSearch, ItemsArea } from './components'

import './TodoList.css';

//TODO: convert this and others to pure components where possible.
//TODO: this will be where I manage state.
class TodoList extends Component {
  render() {
    return (
      <div className="todo-list">
        <ItemSearch />
        <ItemsArea />
        <ButtonToolbar>
          <ButtonGroup>
            <Button>Open All</Button>
            <Button>Close All</Button>
            <Button>Toggle All</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button bsStyle="primary">Add</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
    )
  }
}

export default TodoList;
