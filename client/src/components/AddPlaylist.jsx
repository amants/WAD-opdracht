import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import ADD_PLAYLIST from "../graphql/addPlaylist";
import GET_ALL_PLAYLISTS from "../graphql/getAllPlaylists";
import { Mutation } from "react-apollo";

const AddPlaylist = ({ history }) => {
  let input = null;

  return (
    <Mutation
      mutation={ADD_PLAYLIST}
      update={(cache, { data: { addPlaylist } }) => {
        const data = cache.readQuery({
          query: GET_ALL_PLAYLISTS
        });
        data.allPlaylists.push(addPlaylist);
        cache.writeQuery({
          query: GET_ALL_PLAYLISTS,
          data
        });
      }}
    >
      {addPlaylist => (
        <form
          onSubmit={e => {
            e.preventDefault();
            if (input.value) {
              addPlaylist({ variables: { title: input.value } });
              history.push(`/`);
            }
          }}
        >
          <input
            className="input-content"
            autoFocus
            ref={field => (input = field)}
          />
          <input className="button" type="submit" value="Submit" />
        </form>
      )}
    </Mutation>
  );
};

AddPlaylist.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(AddPlaylist);
