import { GameQuery } from "../App";
import useData from "./useData";

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


const useGames = (gameQuery: GameQuery) => useData<Game>('/games',
 {params: {genres: gameQuery.genre?.id, parent_platforms: gameQuery.platform?.id}}, 
[gameQuery]);
// passing the entire object in the dependencies array, hence if the object changes the hook will refetch data
// making changes

export default useGames;



