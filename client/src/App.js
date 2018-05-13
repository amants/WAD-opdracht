import React, { Component } from "react";
import "./css/App.css";
import PlaylistDetail from "./components/PlaylistDetail";
import Playlists from "./components/Playlists";
import NotFound from "./components/NotFound";
import AddPlaylist from "./components/AddPlaylist";
import ProtectedRoute from "./components/ProtectedRoute";


import { Route, Switch, Link } from "react-router-dom";

import { Query } from "react-apollo";
import GET_ALL_PLAYLISTS from "./graphql/getAllPlaylists";
import User from "./components/User";

class App extends Component {
  render() {
    return (
      <main>
        <h1>
          <Link to="/">Devine Talk</Link>
        </h1>
        <Query query={GET_ALL_PLAYLISTS}>
          {({ loading, error, data: { allPlaylists } }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error...</p>;
            return (
              <Switch>
                <Route
                  path="/"
                  exact
                  render={() => <Playlists playlists={allPlaylists} />}
                />
                <ProtectedRoute path="/playlist/add" component={AddPlaylist} />
                <Route
                  path="/playlist/:id"
                  render={({ match }) => {
                    const id = match.params.id;
                    return <PlaylistDetail key={id} id={id} />;
                  }}
                />

                <Route component={NotFound} />
              </Switch>
            );
          }}
        </Query>

        <User />
      </main>
    );
  }
}

export default App;
