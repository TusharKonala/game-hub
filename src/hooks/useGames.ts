import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}


export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform} [];
    metacritic: number;
  }

  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);

  const [error, setError] = useState("");

  const[isLoading, setLoading] = useState(false);
  // we want to display a loading skeleton to improve user experience, a loading skeleton is basically
  // a set of blank game cards that will be displayed till the actual game card is being retrieved from the 
  // server 

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    // loading skeleton will be visible
    // setting it to true before sending the request
    apiClient
      .get<FetchGamesResponse>("/games", {signal: controller.signal})

      .then((res) => {setGames(res.data.results);
        setLoading(false)
        // setting it to false (skeleton won't be displayed)
      })

      .catch((err) => {if (err instanceof CanceledError ) return;
  
        setError(err.message)
      setLoading(false)});

    return () => controller.abort();
   
  },[]);

  return {games, error, isLoading};
  // returning isLoading from the hook
}

export default useGames;

