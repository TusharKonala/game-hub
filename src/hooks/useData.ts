// instead of having multiple content fetching hooks we can have a single  generic hook

import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface FetchResponse<T> {
    count: number;
    results: T[];
}

// <T>:
// The angle brackets <T> are like a box that can hold any type you want (represented by T).
// When you declare a function, class, or interface with <T>, you're saying, "Hey, I'm going 
// to use a type, but I'll tell you which one later."
// results: T[];: This property is an array [] of type T. It suggests that the actual 
// data or results are stored in an array. The type T is the generic type parameter, 
// meaning the type of data in the array is not specified in the interface but will be 
// specified when an instance of this interface is used.

const useData = <T>(endpoint: string) => { 
    const [data, setData] = useState<T[]>([]);

    const [error, setError] = useState("");
  
    const[isLoading, setLoading] = useState(false);
    
  
    useEffect(() => {
      const controller = new AbortController();
  
      setLoading(true);
      
      apiClient
        .get<FetchResponse<T>>(endpoint, {signal: controller.signal})
  
        .then((res) => {setData(res.data.results);
          setLoading(false)
        })
  
        .catch((err) => {if (err instanceof CanceledError ) return;
    
          setError(err.message)
        setLoading(false)});
  
      return () => controller.abort();
     
    },[]);
  
    return {data, error, isLoading};
};

export default useData;