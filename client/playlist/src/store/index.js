import { decorate, observable } from "mobx";
import PlaylistApi from "../api/playlists.js";
import SongApi from "../api/songs.js";
import Playlist from "../models/Playlist.js";
import Song from "../models/Song.js";

class Store {
  playlists = [];
  songs = [];

  constructor() {
    this.playlistApi = new PlaylistApi();
    this.SongApi = new SongApi();
    this.playlistApi
      .getAll()
      .then(playlists => this._addPlaylists(...playlists));
    this.SongApi.getAll().then(songs => this._addSongs(...songs));
  }

  _addSongs = (...songs) => {
    songs.forEach(song => {
      const { title, artist, playlistid, _id } = songs;
      this.songs.push(new Song(title, artist, playlistid, _id));
    });
  };

  _addPlaylists = (...playlists) => {
    playlists.forEach(playlist => {
      const { name, _id } = playlists;
      this.songs.push(new Playlist(name, _id));
    });
  };

  /*addSong = content => {
      this.api.create(content).then(tweet => this._add(tweet));
  };

  setTweet = value => {
    this.content = value;
  };

  resetTweet = () => {
    this.content = "";
  };*/
}

decorate(Store, {
  tweets: observable,
  content: observable
  /*setTweet: action,
  resetTweet: action,
  add: action*/
});

const store = new Store();
export default store;
