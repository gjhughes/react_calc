import React from 'react';
import ReactDOM from 'react-dom';

import './scss/styles.scss';
import Calculator from './components/Calculator';


class App extends React.Component{
  render() {
    return(
      <div>
        <Calculator />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
