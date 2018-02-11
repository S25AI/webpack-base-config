'use strict';

import React, {Component} from 'react';
import {render} from 'react-dom';

class App extends Component {
  render() {
    return <div>This is My Second App</div>;
  }
}

render(<App />, document.querySelector('#root'));
