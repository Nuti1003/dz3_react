import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';


class App extends React.Component {
  state = {
    todos: [
      { id: 1, label: 'Drink vine', important: false, done: false },
      { id: 3, label: 'Have a dinner', important: false, done: false },
      { id: 2, label: 'Make Awesome', important: true, done: false },
    ]
  }

  onChangeState = () => {
    this.setState({
      todos: [
        { id: 1, label: 'Drink champagne', important: false, done: false }
      ]
    })
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1452} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={this.state.todos} />
        <input type='button' value='Change state' onClick={this.onChangeState} />
      </div>
    );
  };
}


export default App;
