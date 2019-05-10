'use strict';

import React, {Fragment, useState} from 'react';
import Extra from './extra';
import {render} from 'react-dom';
import './style.css';

function App() {
  let [count, increment] = useState(11);

  return (
    <Fragment>
      <button onClick={() => increment(count + 1)}>{count}</button>
      <Extra title='what is your name' descr='how are you' />
    </Fragment>
  );
}

render(<App />, document.querySelector('#root'));