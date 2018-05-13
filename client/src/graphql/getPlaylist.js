import gql from "graphql-tag";

export default gql`
  query getPlaylist($id: String!) {
    playlist(_id: $id) {
      _id
      title
      songs {
        _id
        artist
        title
        user {
          name
        }
        created: createdAt
      }
    }
  }
`;
