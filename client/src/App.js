import React, { Component } from 'react';

import TodoList from './components/TodoList/TodoList.js'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Verbling Challenge with Honors by Ben Greenberg</h2>
        </div>
        <TodoList />
      </div>
    );
  }
}

export default App;
