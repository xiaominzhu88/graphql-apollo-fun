import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_GAME_MUTATION, GET_GAMES } from "../graphql/get-data";
import { Link } from "react-router-dom";
import localClient from "../apolloClients/localClient";
import Select, { components } from "react-select";

const Option = (props) => (
  <components.Option {...props}>
    <input type="checkbox" checked={props.isSelected} onChange={() => null} />
    <label>{props.data.label}</label>
  </components.Option>
);

export const AddGameForm = () => {
  const [gameData, setGameData] = useState({
    title: "",
    platform: [],
  });
  const { data, refetch } = useQuery(GET_GAMES, {
    client: localClient,
  });
  const [addGame, { loading, error }] = useMutation(ADD_GAME_MUTATION, {
    client: localClient,
    onCompleted: () => refetch(), // Refetch the games query after mutation completes
  });

  const handleTitleChange = (event) => {
    setGameData({
      ...gameData,
      title: event.target.value,
    });
  };

  const handlePlatformChange = (selected) => {
    setGameData({
      ...gameData,
      platform: selected ? selected.map((option) => option.value) : [],
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addGame({
      variables: {
        game: gameData,
      },
    });
    setGameData({ title: "", platform: [] });
  };

  const platformOptions = [
    { label: "Xbox", value: "Xbox" },
    { label: "PC", value: "PC" },
    { label: "PS5", value: "PS5" },
    { label: "Switch", value: "Switch" },
  ];

  return (
    <>
      <Link to={"/"}>To Pokemons</Link>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={gameData.title}
          onChange={handleTitleChange}
          placeholder="Add Game Title"
          style={{ margin: "10px 0" }}
        />
        <Select
          options={platformOptions}
          isMulti
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
          components={{ Option }}
          onChange={handlePlatformChange}
          value={platformOptions.filter((option) =>
            gameData.platform.includes(option.value)
          )}
        />
        <button type="submit" disabled={loading} style={{ margin: "10px 0" }}>
          Add Game
        </button>
        {error && (
          <p style={{ color: "red" }}>Error adding game: {error.message}</p>
        )}
        <hr />
        {data &&
          data.games.map((game) => (
            <ul key={game.id}>
              <li style={{ color: "white" }}> {game.title}</li>
              <div style={{ color: "white" }}>
                Platform:{" "}
                {game.platform.map((item) => (
                  <span>{item} </span>
                ))}
              </div>
            </ul>
          ))}
      </form>
    </>
  );
};
