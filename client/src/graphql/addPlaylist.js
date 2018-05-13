import gql from "graphql-tag";

export default gql`
  mutation addPlaylist($title: String!) {
    addPlaylist(title: $title) {
      _id
      title
    }
  }
`;
