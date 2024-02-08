// instead of having multiple content fetching hooks we can have a single  generic hook

import { AxiosRequestConfig, CanceledError } from "axios";
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

const useData = <T>(endpoint: string, requestConfig ?: AxiosRequestConfig, deps?: any[]) => { 

//   requestConfig: This is an optional parameter that allows you to provide additional configuration 
//   options for the Axios request.
//    It is of type AxiosRequestConfig, which is the configuration object used by Axios for making HTTP requests.

// ?: The question mark denotes that the requestConfig parameter is optional. If you provide a
//  configuration object when calling the useData hook, it will be used; otherwise, the default 
//  value is undefined.

// we will basically use it to pass the selected genre while making a request   

// deps?: any[]: we are passing a dependecies array which can have object any type hence we write "any"
// we make it optional by adding "?" bcos any parameter following an optional parameter must be optional
// (requestConfig is an optional parameter)


    const [data, setData] = useState<T[]>([]);

    const [error, setError] = useState("");
  
    const[isLoading, setLoading] = useState(false);
    
  
    useEffect(() => {
      const controller = new AbortController();
  
      setLoading(true);
      
      apiClient
        .get<FetchResponse<T>>(endpoint, {signal: controller.signal, ...requestConfig})
        // ...requestConfig: This is the spread syntax (...) in JavaScript/TypeScript. It is used
        //  to include all properties of the requestConfig object. If requestConfig is provided, its 
        //  properties are spread into the new object. 
        // This allows you to customize the Axios request with additional configurations like headers,
        //  parameters, etc.
        // By creating a new object with the spread syntax, you ensure that modifications made to the object
        //  do not affect the original requestConfig object. This helps 
        // maintain immutability, which can be important for avoiding unintended side effects and bugs.
        // we are copying the properties into a new object so that we can make more modifications

        .then((res) => {setData(res.data.results);
          setLoading(false)
        })
  
        .catch((err) => {if (err instanceof CanceledError ) return;
    
          setError(err.message)
        setLoading(false)});
  
      return () => controller.abort();
     
    },deps ? [...deps] : []);

    // []: it is an empty dependecncies array which specifies that the request will be made only once which means 
    // that when we selected a particular genre and make a request the request won't be processed
    // deps ? [...deps] : []: if dependencies are present then we will pass the dependencies array otherwise we
    // pass an empty array
  
    return {data, error, isLoading};
};

export default useData;