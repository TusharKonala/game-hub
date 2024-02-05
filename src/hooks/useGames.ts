import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    // each image has a property called "background_image"(refer to rawg api website)
  }
  
  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);

  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    // The AbortController is a built-in JavaScript object that is used to control the abortion
    //  of one or more asynchronous operations, such as fetching data from an API. 
    // Here, you create a new instance of the AbortController
    
    apiClient
      .get<FetchGamesResponse>("/games", {signal: controller.signal})
//       Now, when you make an HTTP request using apiClient.get, you are passing an options object
//        as the second argument. This options object includes the signal
//        property, and you are providing the AbortSignal from the controller.
// The purpose of using the AbortSignal is to enable the ability to cancel the ongoing HTTP request.
//  If, for example, the component that initiated the request is unmounted before the request is complete, 
//  you can call controller.abort()
// The options object passed to the apiClient.get method, including the signal option,
//  serves the purpose of associating the HTTP request with the AbortSignal from the AbortController
      .then((res) => setGames(res.data.results))

      .catch((err) => {if (err instanceof CanceledError ) return;
        // This line of code checks if the error (err) is a special type of error called CanceledError.
        //  If it is, it stops or exits from the current function or block of code right away. It's like 
        //  saying, "If something went wrong, but it's because we intentionally canceled something,
        //   then just stop doing anything more and move on." This helps to handle certain errors
        //    in a specific way,
        //  such as when a request is intentionally canceled and doesn't need further processing.
        // If err is not an instance of cancelled error, the line given below will execute
        setError(err.message)});

    return () => controller.abort();
    // In the useEffect hook, the return statement is used to define a cleanup function.
    //  This cleanup function is executed when the component unmounts or when the dependencies
    //   listed in the dependency array ([] in this case) change.
    //  In your case, it's executed when the component unmounts because the dependency array is empty.
    // In summary, the cleanup function is ensuring that if the component using this hook is unmounted,
    //  the controller.abort()
    //  method is called, signaling the associated AbortSignal and effectively canceling any
    //  ongoing HTTP request.
    // Signaling the associated AbortSignal means triggering an event on the signal that informs any 
    // asynchronous operation (such as an HTTP request) associated with that signal to abort or cancel itself.
  },[]);

  return {games, error};
//   this function returns an object with 2 properties: games, errors
}

export default useGames;

// in this file we are creating a custom hook to fetch games, we removed the entire http
//  request logic from the "GameGrid" file
// and pasted it here, bcos we want our components to return markup and not perform any kind of logiv related 
// to making requests, custom hooks come in place to help in separation of concerns