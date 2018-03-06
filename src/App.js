import React, { Component } from 'react';
import './App.css';
import Music from './Music';
import AddForm from './AddForm';
import CreatePlaylist from './CreatePlaylist';

class App extends Component {
  render() {
    return (
      <div>
        <CreatePlaylist />
        <AddForm />
        <Music />
      </div>
    );
  }
}

export default App;
