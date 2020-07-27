import React from 'react';
import { Component } from 'react';
import { evaluate, string } from 'mathjs';
import './Calculator.css';

import NumBtn from './components/NumBtn';
export default class Calculator extends Component {
  state = {
    screenShow: '0',
  };

  buttonPressHandler = (val) => {
    this.setState({
      screenShow:
        this.state.screenShow === '0'
          ? String(val)
          : this.state.screenShow + val,
    });
  };

  handleOperate = (val) => {
    let arr = this.state.screenShow.split('');
    let lastLtr = arr[arr.length - 1];
    if (
      lastLtr !== '+' &&
      lastLtr !== '-' &&
      lastLtr !== '*' &&
      lastLtr !== '/'
    ) {
      this.setState({
        screenShow:
          this.state.screenShow === '0'
            ? String(val)
            : this.state.screenShow + val,
      });
    } else {
      return;
    }
  };

  pointPressHandler = (val) => {
    let arr = this.state.screenShow.split('');
    let lastLtr = arr[arr.length - 1];
    if (lastLtr !== '.' && arr.indexOf('.') === -1) {
      this.setState({
        screenShow: this.state.screenShow + val,
      });
    } else {
      return;
    }
  };

  clearInput = () => {
    this.setState({
      screenShow: '0',
    });
  };

  handleEqual = () => {
    this.setState({
      // screenShow: parseFloat(evaluate(this.state.screenShow)).toFixed(4),
      screenShow: evaluate(this.state.screenShow),
    });
  };

  render() {
    return (
      <div className='calculator'>
        <input
          type='text'
          className='calculator-screen'
          value={this.state.screenShow}
          disabled
        />

        {/*//////////////// cpm//////////////////////////////////// */}
        {/* <NumBtn
          value='12'
          onClick={(e) => this.buttonPressHandler(e.target.value)}
        /> */}

        <div className='calculator-keys'>
          <button
            type='button'
            className='operator'
            value='+'
            onClick={(e) => this.handleOperate(e.target.value)}
          >
            +
          </button>
          <button
            type='button'
            value='7'
            onClick={(e) => this.buttonPressHandler(e.target.value)}
          >
            7
          </button>
          <button
            type='button'
            value='8'
            onClick={(e) => this.buttonPressHandler(e.target.value)}
          >
            8
          </button>
          <button
            type='button'
            value='9'
            onClick={(e) => this.buttonPressHandler(e.target.value)}
          >
            9
          </button>
          <button
            type='button'
            className='operator'
            value='-'
            onClick={(e) => this.handleOperate(e.target.value)}
          >
            -
          </button>
          <button
            type='button'
            value='4'
            onClick={(e) => this.buttonPressHandler(e.target.value)}
          >
            4
          </button>
          <button
            type='button'
            value='5'
            onClick={(e) => this.buttonPressHandler(e.target.value)}
          >
            5
          </button>
          <button
            type='button'
            value='6'
            onClick={(e) => this.buttonPressHandler(e.target.value)}
          >
            6
          </button>
          <button
            type='button'
            className='operator'
            value='*'
            onClick={(e) => this.handleOperate(e.target.value)}
          >
            &times;
          </button>
          <button
            type='button'
            value='1'
            onClick={(e) => this.buttonPressHandler(e.target.value)}
          >
            1
          </button>
          <button
            type='button'
            value='2'
            onClick={(e) => this.buttonPressHandler(e.target.value)}
          >
            2
          </button>
          <button
            type='button'
            value='3'
            onClick={(e) => this.buttonPressHandler(e.target.value)}
          >
            3
          </button>
          <button
            type='button'
            className='operator'
            value='/'
            onClick={(e) => this.handleOperate(e.target.value)}
          >
            &divide;
          </button>

          <button
            type='button'
            value='0'
            onClick={(e) => this.buttonPressHandler(e.target.value)}
          >
            0
          </button>
          <button
            type='button'
            className='decimal'
            value='.'
            onClick={(e) => this.pointPressHandler(e.target.value)}
          >
            .
          </button>
          <button
            type='button'
            className='all-clear'
            value='all-clear'
            onClick={this.clearInput}
          >
            CLEAR
          </button>

          <button
            type='button'
            className='equal-sign'
            value='='
            onClick={this.handleEqual}
          >
            =
          </button>
        </div>
      </div>
    );
  }
}
