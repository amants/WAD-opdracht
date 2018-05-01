class Api {
    url = "http://localhost:4000/playlists";
    getAll = () => {
      return fetch(this.url).then(r => r.json());
    };
  
    create = content => {
      const options = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ content })
      };
      return fetch(this.url, options)
        .then(r => r.json())
        .catch(err => console.log(err));
    };
  }
  
  export default Api;
  