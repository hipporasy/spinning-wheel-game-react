import React from 'react';
import ReactDOM from 'react-dom';

import Wheel from './components/wheel';

import './styles.css';

export class App extends React.Component {
  constructor() {
    super();
    this.places = [
      'Thank You',
      'Wristband',
      'Thank You',
      'Wonderpass Tag',
      'Thank You',
      'Jeep 10%',
      'Thank You',
      'Apopo 1 ticket',
      'Thank You',
      'Japanese food',
      'Thank You',
      'Pastas',
      'Thank You',
    ];
  }

  render() {
    return (
      <div className="App">
        <h1>What should you eat today?</h1>
        <Wheel items={this.places} />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
