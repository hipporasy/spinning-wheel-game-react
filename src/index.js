import React from 'react';
import ReactDOM from 'react-dom';

import Wheel from './components/wheel';

import './styles.css';

export class App extends React.Component {
  constructor() {
    super();
    this.places = [
      'Quad Bike 10% ',
      'Wristband',
      'Thank You',
      'JP Prana',
      'Vanh Angkor',
      'Thank You',
      'La Residence WatBo',
      'Little Prince Resort & Spa',
      'Thank You',
      'Petit Villa Boutique & Spa',
      'Jeep (10%)',
      'Thank You',
      'APOPO 1 Ticket',
      'Phare Cambodian Circus 5%',
      'Thank You',
      'Wonderpass Tag',
      'Thank You',
      'Royal Archery Club',
      'Thank You',
    ];
  }

  render() {
    return (
      <div className="App">
        <h1>Ready to win something?</h1>
        <Wheel items={this.places} />
        <h1>Ready to win something?</h1>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
