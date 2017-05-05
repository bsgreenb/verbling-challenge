import React, { Component } from 'react';

import TodoList from './components/TodoList/TodoList.js'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h2 className="heading">Verbling Challenge with Honors</h2>
        <TodoList />
      </div>
    );
  }
}

export default App;
