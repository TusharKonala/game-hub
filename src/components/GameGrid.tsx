import React, { useEffect } from "react";
import apiClient from "../services/api-client";
import { useState } from "react";
import { Text } from "@chakra-ui/react";
//  we can use "Text" only after importing it

interface Game {
  id: number;
  name: string;
}
// properties of each indivisual game that we fetch, we refer to the rawg api website to get these properties
// Follow the steps below:
// 1) Go to games
// 2) Go to list of games
// 3) Look at the response schema
// 4) Click on 'results' to expand it
// we didn't copy all the properties here bcos we don't need all of those

interface FetchGamesResponse {
  count: number;
  results: Game[];
  // this will be an array of game objects(interface of each object is given above, name of the interface is
  // 'Game')
}
// we are making an interface for the response object, we looked at the format of the response
//  in rawg api website

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  //  ([]): we set the intial value of 'games' to array,
  // <Game[]>: we explicitly say that it is an array of game objects
  const [error, setError] = useState("");

  //   useEffect is like a helper function
  //   in React that helps you do extra things in your component:
  // When does it run?
  // It runs after your component has rendered on the screen.
  // What can it do?
  // It can do extra tasks, like fetching data from the internet, updating the page title,
  //  or anything else that's not just displaying things.

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      // we specified the endpoint here ie '/games'
      // we want the response object to adhere to the rules mentioned in 'FetchGamesResponse' interface
      .catch((err) => setError(err.message));
    // The error object in a catch block comes from the rejected promise in the preceding then or
    // catch block. When a promise encounters an error during its execution, it is said to be "rejected,"
    // and the error object is passed down the promise chain until it is caught by a catch block.
    // err:This is a parameter representing the error object that is passed to the
    // catch block. The error object contains information about what went wrong during
    // the asynchronous operation.
    // you can definitely change the name of
    //  the parameter in the catch block to something else that makes more sense in the context of your code.
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      {/* imported "Text" from Chakra ui */}
      {/* rendering error message if we have an error */}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
        {/*  reprsenting each game from the array 'games' as a list item ie li */}
      </ul>
    </>
  );
};

export default GameGrid;
