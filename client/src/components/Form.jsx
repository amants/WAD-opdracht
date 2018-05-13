import React from "react";

import { Mutation } from "react-apollo";
import ADD_SONG from "../graphql/addSong";
import GET_PLAYLIST from "../graphql/getPlaylist";

const Form = ({ playlistId }) => {
  let title = null;
  let artist = null;
  return (
    <Mutation
      mutation={ADD_SONG}
      refetchQueries={[{ query: GET_PLAYLIST, variables: { id: playlistId } }]}
    >
      {(addSong, { loading, error }) => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              if (artist.value && title.value) {
                addSong({
                  variables: { playlist: playlistId, title: title.value, artist: artist.value }
                });
                e.currentTarget.reset();
                artist.focus();
              } else if (!artist.value) {
                artist.focus();
              } else if (!title.value) {
                title.focus();
              }
            }}
          >
            <input
              className="input-content"
              autoFocus
              placeholder="Artist name ..."
              ref={field => (artist = field)}
            />
            <input
              className="input-content"
              placeholder="Song name ..."
              ref={field => (title = field)}
            />
            <input className="button" type="submit" value="Submit" />
          </form>
          {loading && <p>Loading...</p>}
          {error && <p>{error.message}- Please try again</p>}
        </div>
      )}
    </Mutation>
  );
};

export default Form;
