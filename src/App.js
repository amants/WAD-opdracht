import React, { Component } from 'react';
import './App.css';
import Music from './Music';
import AddForm from './AddForm';

class App extends Component {
  render() {
    return (
      <div>
        <AddForm />
        <Music />
      </div>
    );
  }
}

export default App;
