import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    value: 0,
  };

  handleIncrement = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };
  handleDecrement = () => {
    this.setState({
      value: this.state.value - 1,
    });
  };
  render() {
    return (
      <div className='App'>
        <span>{this.state.value}</span>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}

export default App;
