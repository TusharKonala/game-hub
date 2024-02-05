import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
// interface for platform object, this object consists details about the various platforms that the 
// game is available on eg: xbox, playstation, etc

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform} []
    // it is an array of objects where each object has a property called platform and this property 
    // has a value which is an object and this object will adhere to the interface "Platform"
    // (took info from rawg api)
  }
  
// An interface in programming defines a set of rules that a class or
//  object must follow. It specifies the structure by listing required properties or methods


  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);

  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    
    apiClient
      .get<FetchGamesResponse>("/games", {signal: controller.signal})

      .then((res) => setGames(res.data.results))

      .catch((err) => {if (err instanceof CanceledError ) return;
  
        setError(err.message)});

    return () => controller.abort();
   
  },[]);

  return {games, error};
}

export default useGames;

