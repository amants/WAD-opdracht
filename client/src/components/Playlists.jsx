import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ProtectedComponent from "./ProtectedComponent";

const Playlists = ({ playlists }) => {
  return (
    <section className="topics">
      <ul className="topics-list">
        {playlists.map(playlist => (
          <li className="topic" key={playlist._id}>
            <Link className="topic-link" to={`playlist/${playlist._id}`}>
              {playlist.title}
            </Link>
          </li>
        ))}{" "}
      </ul>
      <ProtectedComponent
        protect={
          <nav>
            <Link to="/playlist/add" className="button">
              Add playlist
            </Link>
          </nav>
        }
        alternative={
          <p className="signin-topic">Please sign in to create a topic</p>
        }
      />
    </section>
  );
};

Playlists.propTypes = {
  playlists: PropTypes.array.isRequired
};

export default Playlists;
