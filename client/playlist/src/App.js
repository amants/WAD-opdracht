import React, { Component } from "react";
import "./App.css";
import Music from "./Music";
import AddForm from "./AddForm";
import CreatePlaylist from "./CreatePlaylist";

class App extends Component {
  render() {
    const { store } = this.props;
    return (
      <div>
        <h1>Playlists</h1>
        <CreatePlaylist store={store} />
        <AddForm store={store} />
        <Music store={store} />
      </div>
    );
  }
}

export default App;
