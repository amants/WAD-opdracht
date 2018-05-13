import gql from "graphql-tag";

export default gql`
  query getAllPlaylists {
    allPlaylists {
      _id
      title
    }
  }
`;
