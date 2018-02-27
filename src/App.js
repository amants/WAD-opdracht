import React, { Component } from 'react';
import './App.css';
import Order from './Order';
import Hallo from './Hallo';

class App extends Component {
  render() {
    return (
      <div>
        <Hallo naam="Sam" groep="2DEV1" />
        <Order aantal="2" bestelling="Worstenbroodje" />
      </div>
    );
  }
}

export default App;
