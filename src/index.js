import React from 'react';
import ReactDOM from 'react-dom';

import Wheel from './components/wheel';

import './styles.css';

export class App extends React.Component {
  constructor() {
    super();
    this.places = [
      'សារមន្ទីរ ព្រះស្រីឦសានវរ្ម័ន Preah Srey Içanavarman Museum - Sosoro Museum​​ 80%',
      'Chit Chat Café 122 30%',
      'សៀវភៅជីវិត 20%',
      'Eung Eng Kruy Phone Shop 5%',
      'Yumi បាញ់ក្ដាម 20%',
      'TenZero 35% ',
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
