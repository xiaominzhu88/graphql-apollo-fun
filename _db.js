let games = [
  { id: "1", title: "Game 1", platform: ["Xbox", "PC"] },
  { id: "2", title: "Game 2", platform: ["PS5", "PC"] },
  { id: "3", title: "Game 3", platform: ["Switch"] },
];

let authors = [
  { id: "1", name: "Lola", verified: true },
  { id: "2", name: "Bobi", verified: false },
  { id: "3", name: "Lines", verified: true },
];

let reviews = [
  { id: "1", rating: 9, content: "Some content", author_id: "1", game_id: "2" },
  { id: "2", rating: 8, content: "Some content", author_id: "2", game_id: "1" },
  { id: "3", rating: 7, content: "Some content", author_id: "3", game_id: "3" },
  { id: "4", rating: 6, content: "Some content", author_id: "2", game_id: "2" },
  { id: "5", rating: 5, content: "Some content", author_id: "3", game_id: "3" },
  { id: "6", rating: 8, content: "Some content", author_id: "1", game_id: "3" },
  {
    id: "7",
    rating: 10,
    content: "Some content",
    author_id: "3",
    game_id: "2",
  },
];

export default { games, authors, reviews };
