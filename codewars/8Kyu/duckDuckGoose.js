/* 
Given an array of Player objects and a position (first position is 1), return the name of the chosen 
Player.
name is a property of Player objects, e.g Player.name

Example:
duck_duck_goose([a, b, c, d], 1) should return a.name
duck_duck_goose([a, b, c, d], 5) should return a.name
duck_duck_goose([a, b, c, d], 4) should return d.name
*/

const playersObj = [
  {
    name: "Felipe",
  },
  {
    name: "Karla",
  },
  {
    name: "Zoe",
  },
  {
    name: "Araceli",
  },
  {
    name: "Lilo",
  },
  {
    name: "Morgan",
  },
];

const duckDuckGoose = (players, goose) => {
  const playerIndex = (goose - 1) % players.length;
  return players[playerIndex].name;
};

console.log(duckDuckGoose(playersObj, 73));
