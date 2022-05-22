import { useState } from 'react';

function Counter(props) {
  const num = props.init;
  const handleClicksum = props.handleClicksum;
  const handleClickdim = props.handleClickdim;
  const reset = props.reset;

  return (
    <div>
      <h1>Counter</h1>
      <button type="button" onClick={handleClicksum}>
        +
      </button>
      <button type="button" onClick={reset}>
        Reset
      </button>
      <button type="button" onClick={handleClickdim}>
        -
      </button>
      <h1>{props.count}</h1>
    </div>
  );
}

export default Counter;
