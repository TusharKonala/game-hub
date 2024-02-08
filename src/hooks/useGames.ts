import useData from "./useData";
import { Genre } from "./useGenres";

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


const useGames = (selectedGenre: Genre | null) => useData<Game>('/games', {params: {genres: selectedGenre?.id}}, 
[selectedGenre?.id]);
// modifying the function ie adding a parameter selectedGenre
// In the context of programming and functions, a parameter is a variable or value that is used in a
//  function or method definition.
//  It is a placeholder for the actual value that will be passed (supplied) to the function when it is called

// A query parameter is a component of a URL that is used to pass specific information or
//  parameters to a web server. Query parameters are typically appended to the end of a URL 
//  and are separated from the 
// base URL by a question mark (?). Multiple parameters are separated by ampersands (&).

// params: This is an Axios configuration option that allows you to specify parameters to be sent
//  with the request.
// {genres: selectedGenre?.id}: This is an object specifying the query parameter to be 
// included in the request. The query parameter is named genres, 
// and its value is determined by selectedGenre?.id.
// selectedGenre?.id: This is using optional chaining (?.) to safely access
//  the id property of the selectedGenre object. If selectedGenre is not null or undefined, the id property will
//  be accessed; otherwise, the entire expression evaluates to undefined.

// [selectedGenre?.id]: we pass the id, this is the dependencies array
// an "effect" refers to a function that is executed after a component renders.
// In the useEffect hook, the dependencies array is used to specify the values that the 
// effect depends on. When any of these values change, the effect is re-executed.
// In this case, [selectedGenre?.id] is provided as the dependencies array. It indicates
//  that the effect inside the useData hook will be triggered whenever the value
//  of selectedGenre?.id changes.
// n the useGames hook, the dependencies array [selectedGenre?.id] contains only
//  a single value, which is the id property of the selectedGenre object

export default useGames;



