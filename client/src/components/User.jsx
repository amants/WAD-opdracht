import React, { Component } from "react";

import GET_CURRENT_USER from "../graphql/getCurrentUser";
import { Query } from "react-apollo";
import Register from "./Register";
import Login from "./Login";

class User extends Component {

  handleSignOut = client => {
    localStorage.removeItem("jwt");
    client.resetStore();
  };

  render() {
    return (
      <section className="user">
        <h2>User</h2>
        <Query query={GET_CURRENT_USER}>
          {({ data, client }) => {
            if (data.currentUser) {
              return (
                <div>
                  <p>Signed in as {data.currentUser.name}</p>
                  <button onClick={() => this.handleSignOut(client)}>
                    Sign out
                  </button>
                </div>
              );
            } else {
              return (
                <div>
                  <Register />
                  <Login client={client} />
                </div>
              );
            }
          }}
        </Query>
      </section>
    );
  }
}

export default User;
