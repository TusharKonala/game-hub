
import useData from "./useData";

export interface Genre {
    id: number;
    name: string;
}


const useGenres = () => useData<Genre>('/genres');
  // using the generic data fetching hook


export default useGenres;