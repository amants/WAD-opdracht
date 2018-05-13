import gql from "graphql-tag";

export default gql`
  mutation addSong($playlist: String!, $title: String!, $artist: String!) {
    addSong(playlist: $playlist, title: $title, artist: $artist) {
      _id
      title
      artist
      created: createdAt
    }
  }
`;
