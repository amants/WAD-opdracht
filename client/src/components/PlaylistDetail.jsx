import React from "react";
import SongDetail from "./SongDetail";
import Form from "./Form";
import PropTypes from "prop-types";

import { Query } from "react-apollo";
import GET_PLAYLIST from "../graphql/getPlaylist";
import ProtectedComponent from "./ProtectedComponent";

const PlaylistDetail = ({ id }) => {
  return (
    <Query query={GET_PLAYLIST} variables={{ id }}>
      {({ data: { playlist }, loading, error }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error...</p>;
        return (
          <section className="topic-detail">
            <h2 className="topic-header">{playlist.title}</h2>
            <div className="posts">
              {playlist.songs.map(song => (
                <SongDetail key={song._id} song={song} />
              ))}
            </div>
            <ProtectedComponent protect={<Form playlistId={id} />} />
          </section>
        );
      }}
    </Query>
  );
};

PlaylistDetail.propTypes = {
  id: PropTypes.string.isRequired
};

export default PlaylistDetail;
