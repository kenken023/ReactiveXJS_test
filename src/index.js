import React from 'react';
import {render} from 'react-dom';

import AwesomeComponent from './AwesomeComponent.js';
import ConverterComponent from './ConverterComponent.js';

class App extends React.Component {
  render () {
    return (
        <div>
            <h2>Money Converter</h2>
            <ConverterComponent />
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));