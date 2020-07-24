import React from 'react';

import '../Calculator.css';

export default function NumBtn(props) {
  return (
    <button
      type='button'
      class='operator'
      value={props.value}
      onClick={props.handleClick}
    >
      {' '}
      {props.value}
    </button>
  );
}
