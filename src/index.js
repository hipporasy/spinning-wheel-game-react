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
      'JP Prana',
      'Vanh Angkor',
      'La Residence WatBo',
      'Little Prince Resort & Spa',
      'Thank You',
      'Petit Villa Boutique & Spa',
      'Jeep (10%)',
      'APOPO 1 Ticket',
      'Phare Cambodian Circus',
      'Wonderpass Tag',
      'Royal Archery Club',
    ];
  }

  render() {
    return (
      <div className="App">
        <h1>Ready to win something?</h1>
        <Wheel items={this.places} />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
