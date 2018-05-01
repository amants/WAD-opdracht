import { decorate, observable } from "mobx";

class Playlist {
  id = null;
  name = ``;

  constructor(name = ``, id = null) {
    this.name = name;
    this.id = id;
  }

}
decorate(Playlist, {
  name: observable,
});

export default Playlist;
