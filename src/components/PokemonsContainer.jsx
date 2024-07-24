import { useQuery } from "@apollo/client";
import { Pokemon } from "./Pokemon";
import { FavoritePokemon } from "./FavoritePokemon";
import { GET_POKEMONS } from "../graphql/get-data";
import { Link } from "react-router-dom";

export const PokemonsContainer = () => {
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: { first: 35 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const pokemons = data?.pokemons || [];

  return (
    <>
      <Link to={"/form"}>TO Game Form</Link>
      <hr />
      <p style={{ color: "white", fontWeight: "bold" }}>
        We've captured a whopping {data.pokemons.length} Pokémons in our
        database!
      </p>
      <div className="container">
        {pokemons &&
          pokemons.map((pokemon) => (
            <Pokemon key={pokemon.id} pokemon={pokemon} />
          ))}
        <div>
          <hr />
          <p style={{ color: "white", fontWeight: "bold" }}>
            Favorite CHARIZARD!
          </p>
          <FavoritePokemon />
        </div>
      </div>
    </>
  );
};
