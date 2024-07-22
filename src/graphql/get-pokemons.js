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
