import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

// refer to useGames.ts, this code is similar to that
interface Genre {
    id: number;
    name: string;
}
// took these properties by refering to the properties of 
// the response object returned by the rawg api

interface FetchGenresResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => { 
    const [genres, setGenres] = useState<Genre[]>([]);

    const [error, setError] = useState("");
  
    const[isLoading, setLoading] = useState(false);
    
  
    useEffect(() => {
      const controller = new AbortController();
  
      setLoading(true);
      
      apiClient
        .get<FetchGenresResponse>("/genres", {signal: controller.signal})
  
        .then((res) => {setGenres(res.data.results);
          setLoading(false)
        })
  
        .catch((err) => {if (err instanceof CanceledError ) return;
    
          setError(err.message)
        setLoading(false)});
  
      return () => controller.abort();
     
    },[]);
  
    return {genres, error, isLoading};
};

export default useGenres;