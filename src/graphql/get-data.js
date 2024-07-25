import gql from "graphql-tag";

export const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      image
      maxHP
      maxCP
      attacks {
        special {
          name
          damage
        }
      }
    }
  }
`;

export const GET_POKEMON = gql`
  query GetPokemonByIdOrName($id: String, $name: String) {
    pokemon(id: $id, name: $name) {
      id
      name
      image
      maxHP
      maxCP
      weight {
        minimum
        maximum
      }
      resistant
      fleeRate
      attacks {
        special {
          name
          damage
        }
      }
    }
  }
`;

export const GET_GAMES = gql`
  query {
    games {
      id
      title
      platform
    }
  }
`;

export const ADD_GAME_MUTATION = gql`
  mutation AddMutation($game: AddGameInput!) {
    addGame(game: $game) {
      id
      title
      platform
    }
  }
`;

export const DELETE_GAME_MUTATION = gql`
  mutation DeleteMutation($id: ID!) {
    deleteGame(id: $id) {
      id
      title
      platform
    }
  }
`;
