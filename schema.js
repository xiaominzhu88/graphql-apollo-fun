import gql from "graphql-tag";

export const typeDefs = gql`
  type Pokemon {
    id: ID
    name: String
    image: String
    maxHP: String
    maxCP: String
    attacks: [PokemonAttack]
  }
  type PokemonAttack {
    fast: [Attack]
    special: [Attack]
  }
  type Attack {
    name: String
    type: Int
    damage: Int
  }
  type Game {
    id: ID!
    title: String!
    platform: [String!]!
    reviews: [Review!]
  }
  type Review {
    id: ID!
    rating: Int!
    content: String!
    game: Game!
    author: Author!
  }
  type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
  }
  type Query {
    reviews: [Review]
    review(id: ID!): Review
    games: [Game]
    game(id: ID!): Game
    authors: [Author]
    author(id: ID!): Author
    pokemons(first: Int!): [Pokemon]
  }
  type Mutation {
    deleteGame(id: ID!): [Game]
    addGame(game: AddGameInput!): Game
    updateGame(id: ID!, edits: EditGameInput!): Game
  }
  input AddGameInput {
    title: String!
    platform: [String]
  }
  input EditGameInput {
    title: String
    platform: [String!]
  }
`;
