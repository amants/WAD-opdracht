import { decorate, observable } from "mobx";

class Song {
  id = null;
  title = ``;
  artist = ``;
  playlistid = 0;

  constructor(title = ``, artist = ``, playlistid = 0, id = null) {
    this.title = title;
    this.artist = artist;
    this.playlistid = playlistid;
    this.id = id;
  }

}
decorate(Song, {
  title: observable,
  artist: observable,
  playlistid: observable,
});

export default Song;
