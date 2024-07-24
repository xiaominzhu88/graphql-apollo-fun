import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_GAME_MUTATION, GET_GAMES } from "../graphql/get-data";
import { Link } from "react-router-dom";
import localClient from "../apolloClients/localClient";

export const AddGameForm = () => {
  const [gameData, setGameData] = useState({
    title: "",
  });
  const [addGame, { loading, error }] = useMutation(ADD_GAME_MUTATION, {
    client: localClient,
  });
  const { data } = useQuery(GET_GAMES, {
    client: localClient,
  });

  const handleChange = (event) => {
    setGameData({ ...gameData, title: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addGame({ variables: { game: gameData } });
    // Handle mutation response (success or error)
    // setGameData({ title: "" });
  };

  console.log(data);

  return (
    <>
      <Link to={"/"}>To Pokemons</Link>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={gameData.title}
          onChange={handleChange}
          placeholder="Game Title"
        />
        <button type="submit" disabled={loading}>
          Add Game
        </button>
        {error && <p>Error adding game: {error.message}</p>} <hr />
        {gameData && gameData.title}
        <hr />
        {data && data.games.map((game) => game.title)}
      </form>
    </>
  );
};
