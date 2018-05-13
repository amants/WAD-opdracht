import React from "react";
import PropTypes from "prop-types";

const SongDetail = ({ song }) => {
  return (
    <article className="post">
      <p>{new Date(song.created).toLocaleTimeString()}</p>
      <p>{song.user.name}</p>
      <p>{song.artist} - {song.title}</p>
    </article>
  );
};

SongDetail.propTypes = {
  song: PropTypes.object
};

export default SongDetail;
