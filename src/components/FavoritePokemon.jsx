import { useQuery } from "@apollo/client";
import { GET_POKEMON } from "../graphql/get-pokemons";

export const FavoritePokemon = () => {
  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { name: "CHARIZARD" },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const favoritePokemon = data?.pokemon || {};

  return (
    <>
      <div className="pokemon">
        <div className="pokemon__name">
          <p>{favoritePokemon.name}</p>
        </div>
        <div className="pokemon__meta">
          <span>{favoritePokemon.maxHP}</span>
          <span>{favoritePokemon.maxCP}</span>
        </div>

        <div className="pokemon__image">
          <img src={favoritePokemon.image} alt={favoritePokemon.name} />
        </div>
        <div className="pokemon__attacks">
          {favoritePokemon.attacks.special.slice(0, 3).map((attack) => (
            <span key={`${attack.name}-${attack.damage}`}>{attack.name}</span>
          ))}
        </div>
      </div>
      <div className="favorite__meta">
        {favoritePokemon.resistant.map((item) => (
          <span style={{ margin: "0 5px" }} key={item}>
            Resistant: {item}
          </span>
        ))}
        <span>Flee Rate: {favoritePokemon.fleeRate}</span>
        <span>Weight minimum: {favoritePokemon.weight.minimum}</span>
        <span>Weight maximum: {favoritePokemon.weight.maximum}</span>
      </div>
    </>
  );
};
