const { Playlist, Song, User } = require("./connectors");
const { GraphQLScalarType, GraphQLError } = require("graphql");
const { Kind } = require("graphql/language");
const jwt = require("jsonwebtoken");
const { jwtsecret } = require("./config/");

const validateValue = value => {
  if (isNaN(Date.parse(value)))
    throw new GraphQLError(`Query error: not a valid date`, [value]);
};

function getAuthenticatedUser(context) {
  return context.user.then(user => {
    if (!user) {
      return Promise.reject("Unauthorized");
    }
    return user;
  });
}

module.exports = {
  Query: {
    allPlaylists() {
      return Playlist.find();
    },
    allUsers() {
      return User.find();
    },
    playlist(_, args) {
      return Playlist.findById(args._id);
    }
  },
  Mutation: {
    addPlaylist(_, args, context) {
      return getAuthenticatedUser(context).then(user => {
        args.user = user.id;
        return new Playlist(args).save();
      });
    },
    addSong(_, args, context) {
      return getAuthenticatedUser(context).then(user => {
        args.user = user.id;
        return new Song(args).save();
      });
    },
    login(_, { email, password }, context) {
      console.log("login");
      return User.findOne({ email }).then(user => {
        if (!user || !user.validPassword(password)) {
          return Promise.reject("Invalid username/password");
        } else {
          console.log("login ok");
          const token = jwt.sign(
            {
              id: user._id,
              name: user.name
            },
            jwtsecret
          );
          user.jwt = token;
          context.user = Promise.resolve(user);
          return user;
        }
      });
    },
    register(_, { email, password, name }, context) {
      return User.findOne({ email }).then(user => {
        if (!user) {
          return User.create({ email, password, name })
            .then(user => {
              context.user = Promise.resolve(user);
              return user;
            })
            .catch(err => {
              return Promise.reject("Registration errors" + err.message);
            });
        }
        return Promise.reject("Already exists");
      });
    }
  },
  Song: {
    playlist: song => {
      return Playlist.findById(song.playlist);
    },
    user: song => {
      return User.findById(song.user);
    }
  },
  Playlist: {
    songs: playlist => {
      return Song.find({ playlist: playlist._id });
    },
    user: playlist => {
      return User.findById(playlist.user);
    }
  },
  User: {
    songs: user => {
      return Song.find({ user: user._id });
    },
    playlists: user => {
      return Playlist.find({ user: user._id });
    }
  },
  //https://marmelab.com/blog/2017/09/06/dive-into-graphql-part-iii-building-a-graphql-server-with-nodejs.html#managing-custom-scalar-types
  Date: new GraphQLScalarType({
    name: "Date",
    description: "Date type",
    parseValue(value) {
      // value comes from the client, in variables
      validateValue(value);
      return new Date(value); // sent to resolvers
    },
    parseLiteral(ast) {
      // value comes from the client, inlined in the query
      if (ast.kind !== Kind.STRING) {
        throw new GraphQLError(
          `Query error: Can only parse dates strings, got a: ${ast.kind}`,
          [ast]
        );
      }
      validateValue(ast.value);
      return new Date(ast.value); // sent to resolvers
    },
    serialize(value) {
      // value comes from resolvers
      return value.toISOString(); // sent to the client
    }
  })
};
